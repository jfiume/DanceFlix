class Video < ApplicationRecord
  validates :video_url, :image_url, uniqueness: true

  
end