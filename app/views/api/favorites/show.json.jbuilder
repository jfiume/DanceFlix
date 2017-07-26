json.set! @favorite.id do
  json.extract! @favorite, :user_id, :video_id, :id
end
