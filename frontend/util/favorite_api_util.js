export const fetchFavorites = () => (
  $.ajax({
    method: 'GET',
    url: 'api/favorites',
  })
);

export const fetchFavoritesByUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: 'api/favorites',
    data: userId
  })
);

export const createFavorite = (favorite) => (
  $.ajax({
    method: 'POST',
    url: 'api/favorites',
    data: { favorite }
  })
);

export const deleteFavorite = (id) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/favorites/${id}'
  })
);
