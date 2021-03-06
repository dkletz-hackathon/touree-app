import React from 'react'
import {
  Player,
  ControlBar,
  CurrentTimeDisplay,
  BigPlayButton,
  ProgressControl,
  TimeDivider,
  DurationDisplay,
  FullscreenToggle,
  PlayToggle,
  VolumeMenuButton
} from 'video-react'

import 'video-react/dist/video-react.css'
import xid from "xid";

const UPDATE_INTERVAL = 5 // 5 ms
const TIME_TO_UPDATE = 0.010 // 10 ms

class InteractiveVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      atStart: true,
      currentChapterId: "",
      currentTime: 0,
      playerContainers: [],
      showNext: false,
      isFullscreen: false,
      isPaused: true,
      traceId: xid.generateId(),
      parentVideoId: "",
      next: {},
    }

    this.players = []
    this.currentPlayer = 0
  }

  componentDidMount() {
    this.initStoryBook()
    this.getStateInterval = setInterval(this.onUpdate, UPDATE_INTERVAL)
  }

  componentWillUnmount() {
    clearInterval(this.getStateInterval)
  }

  publishEvent = async (eventType, id) => {
    let body = {
      trace_id: this.state.traceId,
      timestamp: Date.now(),
      video_id: this.state.parentVideoId,
      current_video_id: id,
      previous_video_id: "",
      user_id: ""
    }
    await fetch(`http://www.touree.live/api/event/${eventType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  onUpdate = () => {
    const { chapters, currentChapterId, atStart } = this.state
    if (!this.players[this.currentPlayer]) {
      return
    }

    let chapter = chapters[currentChapterId]
    const player = this.players[this.currentPlayer]
    const pState = player.getState();
    const remainingTime = pState.player.duration - pState.player.currentTime

    this.setState({
      atStart: false,
      isFullscreen: pState.player.isFullscreen,
      isPaused: pState.player.paused
    })

    if (atStart) {
      player.play()
      return
    }

    if (remainingTime < TIME_TO_UPDATE) {
      this.nextChapter()
    } else if (remainingTime < parseInt(chapter.time_to_show_next)) {
      this.prepareNext()
    } else {
      this.setState({
        showNext: false,
      })
    }
  }

  initStoryBook = () => {
    const { storyBook } = this.props;
    if (storyBook == null) {
      return
    }

    let startingChapterId = storyBook?.start_detail_id
    if (startingChapterId == null || startingChapterId === "") {
      startingChapterId = storyBook?.details[0].id
    }
    const chapters = storyBook?.detailsMap

    let startingChapter = chapters[startingChapterId]
    const nextChapters = startingChapter?.next_video_details_map

    const playerContainers = []
    playerContainers.push({
      name: startingChapterId,
      zIndex: 1,
      source: "http://www.touree.live/" + startingChapter?.video_url,
      nextChapterInContainer: true
    })


    for (let key in nextChapters) {
      const nextChapterId = nextChapters[key].next_detail_id
      console.log(nextChapterId)
      playerContainers.push({
        name: nextChapterId,
        zIndex: 0,
        source: "http://www.touree.live/" + chapters[nextChapterId]?.video_url,
      })
    }

    this.publishEvent(1, startingChapterId)

    this.setState({
      ...this.state,
      showNext: false,
      currentChapterId: startingChapterId,
      chapters: chapters,
      parentVideoId: storyBook?.id,
      playerContainers,
    }, () => { console.log('init story book', this.state) })
  }

  prepareNext = () => {
    const { chapters, showNext, currentChapterId } = this.state

    if (showNext) {
      return
    }

    let curr = chapters[currentChapterId]
    console.log('current chapter', curr)
    if (curr.next_video_details === null) {
      return
    } else {
      if (curr.next_video_details[0].next_detail_id == null) {
        return
      }
    }

    this.setState({
      next: curr.next_video_details,
      showNext: true
    }, () => console.log(this.state))
  }

  selectNext = (selection) => {
    this.setState({
      selection: selection
    }, this.nextChapter)
  }

  nextChapter = () => {
    let { chapters, currentChapterId, selection, playerContainers, isFullscreen } = this.state;
    const currentChapter = chapters[currentChapterId]

    if (!currentChapter?.next_video_details) {
      return
    }

    selection = selection || "default_next_detail_id"
    if (selection === "default_next_detail_id") {
      selection = currentChapter['next_video_details'][0]?.next_detail_id
    } else {
      selection = currentChapter['next_video_details'][selection]?.next_detail_id
    }


    const nextChapterId = currentChapter.next_video_details_map[selection].next_detail_id
    const nextChapter = chapters[nextChapterId]

    if (nextChapter == null) {
      return;
    }

    this.publishEvent(1, nextChapterId)
    console.log('user select', nextChapter)

    console.log('starting to process player containers', playerContainers)

    let nextChapterNextOptions = []
    console.log('video_detail', nextChapter.next_video_details)
    if (nextChapter.next_video_details) {
      nextChapterNextOptions = [...nextChapter['next_video_options']]
    }
    playerContainers = playerContainers.map((playerContainer, i) => {
      console.log(playerContainer)
      let { source, name } = playerContainer
      if (playerContainer.name !== nextChapterId) {
        if (nextChapterNextOptions.length > 0) {
          console.log('options', nextChapterNextOptions)
          name = nextChapter.next_video_details_map[nextChapterNextOptions.pop()].next_detail_id
          source =  'http://www.touree.live/' + chapters[name]?.video_url
        }
      } else {
        name = nextChapterId
        source =  'http://www.touree.live/' + nextChapter?.video_url
        this.currentPlayer = i
      }

      const zIndex = playerContainer.name === nextChapterId ? 1 : 0

      return {
        ...playerContainer,
        name,
        source,
        zIndex
      }
    })
    console.log('processing player containers finished', playerContainers)


    this.setState({
      ...this.state,
      showNext: false,
      next: {},
      isFullscreen: false,
      currentChapterId: nextChapterId,
      playerContainers,
      source: nextChapter?.video_url
    }, () => {
      const { playerContainers } = this.state
      playerContainers.forEach((playerContainer, i) => {

        if (!playerContainer) {
          return
        }

        if (playerContainer.name !== nextChapterId) {
          console.log('reload players', i, playerContainer?.source)
          this.players[i].load()
          if (isFullscreen) {
            this.players[i].toggleFullscreen()
          }
        } else {
          console.log('play player', i, playerContainer?.source)
          this.players[i].play()
        }
      })
      console.log('new state', this.state);
    })
  }

  togglePlay = () => {
    const player = this.players[this.currentPlayer]
    const pState = player.getState()

    if (pState.player.paused) {
      player.play()
    } else {
      player.pause()
    }
  }

  render() {
    const { playerContainers, showNext, next, isPaused } = this.state


    const nextComponent = (
      <div onClick={this.togglePlay} className="interactive-video-options">
        {(Object.keys(next)).map((nextKey , _) => {
          const nextOpt = next[nextKey]
          return (
            <div
              key={nextKey}
              className="video-option-btn"
              onClick={() => this.selectNext(nextKey)}
            >
              <p>{nextOpt.shown_text}</p>
            </div>
          )
        })}
      </div>
    )
    const titleOverlayComponent = (
      <div onClick={() => this.players[this.currentPlayer].play()} className="overlay-paused">
        <div className="overlay-info">
          <h2>You're watching</h2>
          <h1>{this.props.storyBook?.title}</h1>
          <p>{this.props.storyBook?.description}</p>
        </div>
        <div className="overlay-channels">
          <h2>Creators</h2>
          {[1, 2, 3].map(i => (
            <div className="overlay-channels-item" key={i}>
              <img src="https://images.unsplash.com/photo-1539409363834-aa99701db1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" alt="channel" />
              <div className="overlay-channels-item-info">
                <p>Andre Wibisono</p>
                <p>1.8M subscribers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )

    return (
      <div className="interactive-video">
        {playerContainers.map((playerContainer, i) => {
          const visibility = playerContainer?.zIndex === 1 ? 'visible' : 'hidden'
          return (
            <div
              key={"player-" + i}
              className="interactive-video-player"
              style={{ zIndex: playerContainer?.zIndex, visibility }}
            >
              {isPaused && titleOverlayComponent}
              <Player
                fluid={false} width={'100%'} height={'100%'}
                key={"player-" + i}
                ref={player => {
                  this.players[i] = player
                }}
              >
                <source src={playerContainer?.source} />
                {showNext && nextComponent}
                <ControlBar className="ctrl-bar">
                  <BigPlayButton />
                  <CurrentTimeDisplay disabled />
                  <ProgressControl disabled />
                  <TimeDivider disabled />
                  <DurationDisplay disabled />
                  <PlayToggle order={2} className={"play-toggle"}/>
                  <VolumeMenuButton order={1} />
                  <FullscreenToggle order={3} />
                </ControlBar>
              </Player>
            </div>
          )
        })}
      </div>
    );
  }
}

export default InteractiveVideo;
