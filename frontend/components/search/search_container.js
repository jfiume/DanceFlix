import { connect } from 'react-redux';
import { searchVideo } from '../../actions/video_actions';
import SearchResultItems from './search_result_items';
import values from 'lodash/values';

const mapStateToProps = ({videos}) => ({
  videos,
  results: values(videos)
});

const mapDispatchToProps = dispatch => ({
  searchVideo: query => dispatch(searchVideo(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultItems);
