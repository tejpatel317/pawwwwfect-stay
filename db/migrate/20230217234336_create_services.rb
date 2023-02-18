class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.integer :sitter_id
      t.string :description
      t.float :rate

      t.timestamps
    end
  end
end


