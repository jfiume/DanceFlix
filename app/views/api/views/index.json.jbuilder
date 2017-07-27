@views.each do |view|
  json.set! view.id do
    json.extract! view, :user_id, :video_id, :id, :count
  end
end
