# DanceFlix

DanceFlix is a web application for users to stream dance videos. Inspired by Netflix, DanceFlix allows users to watch, favorite,  and search for their best-loved dance videos of all time.

[DanceFlix](https://danceflix.herokuapp.com/)
<img src="https://res.cloudinary.com/pancake/image/upload/v1506368584/DanceFlix_Homepage_pluwug.png">

## Features

- User accounts with secure authentication
  - full backend and frontend secure user authentication
- Video streaming with controls and no interruption
  - full video streaming from YouTube
- User can favorite their preferred videos
  - favorites appear on the Favorites Page
- User can search for a video by title.
  - search is responsive, loading only the videos that match instantly
- User can view their most viewed videos
  - Most Viewed page, with the videos sorted by view count
- Backend Testing with RSpec
  - RSpec tests improve Rails functionality and provide automated tests for Jenkins


## Project Design

DanceFlix was designed and built in 2 weeks.

A proposal was drafted to help provide an implementation timeline for the development process along with a database schema.

## Technology

DanceFlix is a single-page web application built on a Rails backend and a React frontend.

[Backend](https://github.com/jfiume/DanceFlix/blob/master/docs/backend.md)

[Frontend](https://github.com/jfiume/DanceFlix/blob/master/docs/frontend.md)

[File Storage](https://github.com/jfiume/DanceFlix/blob/master/docs/file_storage.md)

## Code snippets
The following code snippet provides for me to set a different id for each page, which allows for a different background image on each page of a single-page web app.

```javascript
    const currentPage = () => {
      const page = window.location.hash.slice(2);
      if (page === "") {
        return (
          "splash"
        );
      } else {
        return (
          page
        );
      }
    };

    const App = () => (
      <div id={currentPage()}>
      ...
    )
...
```

The following code snippet loads the video from YouTube.

```javascript
  render()
  {
    if (this.props.videoId === parseInt(this.props.match.params.id))
    {
      const video = this.props.currentVideo;

    return (
      <iframe className="current-video"
       src={video.video_url}
        frameBorder="0"
         allowFullScreen></iframe>
      );
    } else {
      ...
      );
    }
  }
...
```

The following code snippet allows for dynamic search by year. Usually search by year will not search by key stroke; however, the following will overcome this challenge.

```ruby
  def search_by_year
    year = params[:query][:year].to_i

    if year == 0
      @videos = Video.all
    elsif year < 10
      year = year * 1000
      next_year = year + 1000
      @videos = Video.where("year >= ? and year < ?", year, next_year)
    elsif year < 100
      year = year * 100
      next_year = year + 100
      @videos = Video.where("year >= ? and year < ?", year, next_year)
    elsif year < 1000
      year = year * 10
      next_year = year + 10
      @videos = Video.where("year >= ? and year < ?", year, next_year)
    else
      @videos = Video.where("year = ?", year)
    end
...
```

## Future Implementations

DanceFlix could be improved with the addition of a few future implementations.
[Future Development](https://github.com/jfiume/DanceFlix/blob/master/docs/future.md)

<img src="http://res.cloudinary.com/pancake/image/upload/v1501268835/Screen_Shot_2017-07-28_at_11.29.06_AM_x486qb.png">
