import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import { fetchVideos } from '../../actions/video_actions';
import { favVideos } from '../../reducers/selectors';
import {
  receiveFavorites,
  fetchFavoritesByUser,
} from '../../actions/favorite_actions';

const mapStateToProps = ({favorites, videos, session}) => {
  return {
    favoriteVideos: favVideos(favorites, videos),
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavoritesByUser: (userId) => dispatch(fetchFavoritesByUser(userId)),
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIndex);
