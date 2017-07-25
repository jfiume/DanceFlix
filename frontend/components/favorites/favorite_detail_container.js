import { connect } from 'react-redux';
import FavoriteDetail from './favorite_detail';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapDispatchToProps = (dispatch, {favorites}) => {
  return {
    createFavorite: () => dispatch(createFavorite),
    deleteFavorite: () => dispatch(deleteFavorite)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FavoriteDetail);
