# DanceFlix

DanceFlix is a web application for users to stream dance videos. Inspired by Netflix, DanceFlix allows users to watch, favorite,  and search for their best-loved dance videos of all time.

DanceFlix is a personal project by Joseph Fiume.

https://danceflix.herokuapp.com/

## Features

- User accounts with secure authentication
- Video streaming with controls and no interruption
- User can favorite their preferred videos
- User can search for a video by title.


## Project Design

DanceFlix was designed and built in 2 weeks.

A proposal was drafted to help provide an implementation timeline for the development process along with a database schema.

## Technology

DanceFlix is a single-page web application built on a Rails backend and a React frontend.

## Code snippets
The following code snippet provides for me to set a different id for each page which allows for a different background image on each page of a single-page web app.


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

The following code snippet loads the video from YouTube.

render() {
  if (this.props.videoId === parseInt(this.props.match.params.id)) {
    const video = this.props.currentVideo;
    return (
      <iframe className="current-video" src={video.video_url} frameBorder="0" allowFullScreen></iframe>
    );
  } ...
}

## Future Implementations

DanceFlix could be improved with the addition of a few future implementations.
