import { connect } from 'react-redux';
import VideoIndex from './video_index';
import {
  receiveVideos,
  fetchVideos
} from '../../actions/video_actions';


const mapStateToProps = ({videos}) => {
  return ({
    videos
  });
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
