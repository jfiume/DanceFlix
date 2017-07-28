export const fetchViewsByUser = (user_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/views',
    data: { user_id }
  })
);

export const createView = (view) => (
  $.ajax({
    method: 'POST',
    url: 'api/views',
    data: { view }
  })
);
