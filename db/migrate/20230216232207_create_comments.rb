class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :sitter_id
      t.integer :owner_id
      t.integer :rating
      t.date :date_posted
      t.string :content

      t.timestamps
    end
  end
end
