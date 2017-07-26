import { connect } from 'react-redux';
import FavoriteDetail from './favorite_detail';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({favorites, videos, session}) => {
  return {
    favId: favorites.id,
    favorites,
    videos,
    session
  };
};

const mapDispatchToProps = (dispatch, {favorites}) => {
  return {
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: id => dispatch(deleteFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteDetail);
