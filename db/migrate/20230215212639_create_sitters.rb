class CreateSitters < ActiveRecord::Migration[6.1]
  def change
    create_table :sitters do |t|
      t.integer :user_id
      t.string :image
      t.string :bio

      t.timestamps
    end
  end
end
