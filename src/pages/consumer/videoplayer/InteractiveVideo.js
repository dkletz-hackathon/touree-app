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

  onUpdate = () => {
    const { chapters, currentChapterId, atStart } = this.state
    if (!this.players[this.currentPlayer]) {
      return
    }

    const chapter = chapters[currentChapterId]
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
    } else if (remainingTime < chapter.timeToShowOptions) {
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

    const startingChapterId = storyBook?.start
    const chapters = storyBook?.chapters

    const startingChapter = chapters[startingChapterId]
    const nextChapters = startingChapter?.next

    const playerContainers = []
    playerContainers.push({
      name: startingChapterId,
      zIndex: 1,
      source: startingChapter?.source,
      nextChapterInContainer: true
    })

    for (let key in nextChapters) {
      const nextChapterId = nextChapters[key].id
      console.log(nextChapterId)
      playerContainers.push({
        name: nextChapterId,
        zIndex: 0,
        source: chapters[nextChapterId]?.source,
      })
    }

    this.setState({
      ...this.state,
      showNext: false,
      currentChapterId: startingChapterId,
      chapters: chapters,
      playerContainers,
    }, () => { console.log('init story book', this.state) })
  }

  prepareNext = () => {
    const { chapters, showNext, currentChapterId } = this.state

    if (showNext) {
      return
    }

    const curr = chapters[currentChapterId]
    if (curr.next === null) {
      return
    }

    this.setState({
      next: curr.next,
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

    if (!currentChapter?.next) {
      return
    }

    selection = selection || "defaultNextOption"
    if (selection === "defaultNextOption") {
      selection = currentChapter[selection]
    }

    const nextChapterId = currentChapter.next[selection].id
    const nextChapter = chapters[nextChapterId]
    console.log('user select', nextChapter)

    console.log('starting to process player containers', playerContainers)

    let nextChapterNextOptions = []
    if (nextChapter.next) {
      nextChapterNextOptions = [...nextChapter.nextOptions]
    }
    playerContainers = playerContainers.map((playerContainer, i) => {
      console.log(playerContainers)
      let { source, name } = playerContainer
      if (playerContainer.name !== nextChapterId) {
        if (nextChapter.next) {
          name = nextChapter.next[nextChapterNextOptions.pop()].id
          source = chapters[name]?.source
        }
      } else {
        name = nextChapterId
        source = nextChapter?.source
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
      source: nextChapter?.source
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
              <p>{nextOpt.text}</p>
            </div>
          )
        })}
      </div>
    )
    const titleOverlayComponent = (
      <div onClick={() => this.players[this.currentPlayer].play()} className="overlay-paused">
        <div className="overlay-info">
          <h2>You're watching</h2>
          <h1>Come! Join Us in a Virtual Trip to Bali</h1>
          <p>We will take a look around into Bali wonders, go grab a note cause you never know you might want to write up some of these places name</p>
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
