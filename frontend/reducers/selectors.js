export const favVideos = (favorites, videos) => (
  Object.values(favorites).map(fav => fav.video_id).map(vidId => videos[vidId])
);

export const sortByMostViewed = (videos, views) => {
  let x = Object.values(videos).map(vid => {
    const count = Object.values(views).filter(view => {
      return view.video_id === vid.id;
    }).length;
    vid.viewCount = count;
    return vid;
  });
  x = x.sort((v1, v2) => {
    if (v1.viewCount < v2.viewCount) {
      return -1;
    } else {
      return 1;
    }
  }).reverse();
  return x;
};
