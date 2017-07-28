import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';
import { createView, addView } from '../../actions/view_actions';

const mapStateToProps = ({session}, ownProps) => {
  return {
    video: ownProps.video,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createView: (view) => dispatch(createView(view)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndexItem);
