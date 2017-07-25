import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index';
import { fetchVideos } from '../../actions/video_actions';
import { favVideos } from '../../reducers/selectors';
import {
  receiveFavorites,
  fetchFavorites,
} from '../../actions/favorite_actions';

const mapStateToProps = ({favorites, videos}) => {
  return {
    favoriteVideos: favVideos(favorites, videos),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIndex);
