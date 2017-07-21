import { connect } from 'react-redux';
import VideoShow from './video_show';
import {
  receiveVideo,
  fetchVideo
} from '../../actions/video_actions';

const mapStateToProps = ({ videos }) => {
  const videoId = videos.id;
  const video = receiveVideo(videos[videoId]);
  return {
    video,
    videoId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
