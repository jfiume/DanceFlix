class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :video_url, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.string :title, null: false
      t.string :genre, null: false
      t.integer :year, null: false
      t.timestamps
    end

    add_index :videos, :video_url, unique: true
    add_index :videos, :image_url, unique: true
  end
end
