export const fetchFavoritesByUser = (user_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/favorites',
    data: { user_id }
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
    url: `api/favorites/${id}`
  })
);
