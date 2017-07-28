import { connect } from 'react-redux';
import values from 'lodash/values';
import ViewsIndex from './views_index';
import { fetchVideos } from '../../actions/video_actions';
import { fetchViewsByUser } from '../../actions/view_actions';

const mapStateToProps = ({videos, session}) => ({
  videos,
  session,
  results: values(videos)
});

const mapDispatchToProps = dispatch => ({
  fetchViewsByUser: (userId) => dispatch(fetchViewsByUser(userId)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewsIndex);
