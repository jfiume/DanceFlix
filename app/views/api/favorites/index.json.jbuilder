@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! user, :id, user: favorite
    json.extract! video, :id, video: favorite
  end
end
