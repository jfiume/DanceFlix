{
  session: {
    current_user: {
      id: 3,
      username: "footlose"
    },
    errors: {
      username_errors: [],
      password_errors: []
    }
  }
  videos: {
    1: {
      video_url: "Dirty Dancing.mp4",
      image_url: "Dirty Dancing.jpg",
      title: "Dirty Dancing",
      genre: "salsa",
      year: "1987",
      description: "I had the time of my life",
      views: {
        4: {
          count: 10,
          userId: 3,
          videoId: 1
        }
      }
      favorites: {
        7: {
          userId: 3,
          videoId: 1
        }
      }
      playlists: {
        3: {
          userId: 3,
          videoId: 1
        }
      }
    }
  }
  searchResults: {
    videos: {
      //will be populated by search query;
    }
  }


}
