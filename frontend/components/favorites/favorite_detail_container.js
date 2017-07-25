import { connect } from 'react-redux';
import VideoIndexItem from '../videos/video_index_item';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({favorites}) => {
  return {
    favId: favorites.id
  };
};

const mapDispatchToProps = (dispatch, {favorites}) => {
  return {
    createFavorite: () => dispatch(createFavorite()),
    deleteFavorite: id => dispatch(deleteFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndexItem);
