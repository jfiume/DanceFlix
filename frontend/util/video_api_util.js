export const fetchVideos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/videos',
  })
);

export const fetchVideo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`
  })
);

export const searchVideo = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/videos',
    data: { query }
  })
);
