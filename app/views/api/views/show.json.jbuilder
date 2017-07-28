json.set! @view.id do
  json.extract! @view, :user_id, :video_id, :id
end
