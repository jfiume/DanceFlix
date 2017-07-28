class ReCreateViews < ActiveRecord::Migration[5.0]
  def change
    create_table :views do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end

    add_index :views, :user_id
    add_index :views, :video_id
    add_index :views, [:user_id, :video_id]
  end
end
