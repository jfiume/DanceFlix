import { connect } from 'react-redux';
import FavoriteDetail from './favorite_detail';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({session}, ownProps) => {
  return {
    videoId: ownProps.videoId,
    favorite: ownProps.favorite,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: id => dispatch(deleteFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteDetail);
