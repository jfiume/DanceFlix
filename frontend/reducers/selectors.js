export const favVideos = (favorites, videos) => (
  Object.values(favorites).map(fav => fav.video_id).map(vidId => videos.id[vidId])
);
