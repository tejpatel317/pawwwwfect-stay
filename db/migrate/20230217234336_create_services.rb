class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.integer :sitter_id
      t.string :service_offered
      t.float :rate


      t.timestamps
    end
  end
end
