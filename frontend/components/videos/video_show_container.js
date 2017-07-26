import { connect } from 'react-redux';
import VideoShow from './video_show';
import {
  receiveVideo,
  fetchVideo
} from '../../actions/video_actions';

const mapStateToProps = ({ videos }) => {
  const videoId = parseInt(Object.keys(videos));
  return {
    currentVideo: videos[videoId],
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
