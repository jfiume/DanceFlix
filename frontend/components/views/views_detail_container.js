import { connect } from 'react-redux';
import ViewDetail from './view_detail';
import { createView, addView } from '../../actions/view_actions';

const mapStateToProps = ({views, videos, session}) => {
  return {
    views,
    videos,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createView: (view) => dispatch(createView(view)),
    addView: (view) => dispatch(addView(view))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDetail);
