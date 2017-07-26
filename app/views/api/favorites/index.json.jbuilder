@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! favorite, :user_id, :video_id, :id
  end
end
