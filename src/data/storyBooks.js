const storyBooks = [{
  id: 'test-video',
  start: "start",
  chapters: {
    "start": {
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
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
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
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
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
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
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
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
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
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
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
    },
    "home": {
      source: "http://68.183.224.203/api/static/video/33b6dfb9-2b06-41ef-bb2a-1e2e276fe9f2-1630774350509.mp4",
    },
  }
}]

export default storyBooks
