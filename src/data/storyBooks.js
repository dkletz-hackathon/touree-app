const storyBooks = [{
  id: 'test-video',
  start: "start",
  chapters: {
    "start": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      timeToShowOptions: 5,
      nextOptions: ["first", "second"],
      defaultNextOption: "first",
      next: {
        first: {
          id: "hill",
          text: "Hills",
        },
        second: {
          id: "beach",
          text: "Beach",
        }
      }
    },
    "beach": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      timeToShowOptions: 5,
      nextOptions: ["first", "second"],
      defaultNextOption: "first",
      next: {
        first: {
          id: "temple",
          text: "Temple",
        },
        second: {
          id: "forest",
          text: "Forest"
        }
      }
    },
    "hill": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      timeToShowOptions: 5,
      nextOptions: ["first", "second"],
      defaultNextOption: "first",
      next: {
        first: {
          id: "temple",
          text: "Temple",
        },
        second: {
          id: "forest",
          text: "Forest"
        }
      }
    },
    "temple": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      timeToShowOptions: 5,
      nextOptions: ["first", "second"],
      defaultNextOption: "first",
      next: {
        first: {
          id: "dinner",
          text: "Dinner"
        },
        second: {
          id: "home",
          text: "Home"
        }
      }
    },
    "forest": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      timeToShowOptions: 5,
      nextOptions: ["first", "second"],
      defaultNextOption: "first",
      next: {
        first: {
          id: "dinner",
          text: "Dinner"
        },
        second: {
          id: "home",
          text: "Home"
        }
      }
    },
    "dinner": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    "home": {
      source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  }
}]

export default storyBooks
