import { connect } from 'react-redux';
import VideoIndex from './video_index';
import {
  receiveVideos,
  fetchVideos
} from '../../actions/video_actions';


const mapStateToProps = (state) => {
  return {
    videos: receiveVideos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
