class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end

    add_index :favorites, :user_id
    add_index :favorites, :video_id
    add_index :favorites, [:user_id, :video_id], unique: true
  end
end
