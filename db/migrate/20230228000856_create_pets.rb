class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.integer :owner_id
      t.string :name
      t.string :species
      t.string :breed
      t.integer :age
      t.float :weight
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
