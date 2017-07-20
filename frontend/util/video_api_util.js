export const fetchVideos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/videos',
    // data
  })
);

export const fetchVideo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`
  })
);
