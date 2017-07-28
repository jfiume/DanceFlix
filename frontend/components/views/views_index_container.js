import { connect } from 'react-redux';
import values from 'lodash/values';
import ViewsIndex from './views_index';
import { fetchVideos } from '../../actions/video_actions';
import { fetchViewsByUser } from '../../actions/view_actions';
import { sortByMostViewed } from '../../reducers/selectors';

const mapStateToProps = ({videos, session, views}) => ({
  results: sortByMostViewed(videos, views),
  session,
});

const mapDispatchToProps = dispatch => ({
  fetchViewsByUser: (userId) => dispatch(fetchViewsByUser(userId)),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewsIndex);
