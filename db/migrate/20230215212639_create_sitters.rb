class CreateSitters < ActiveRecord::Migration[6.1]
  def change
    create_table :sitters do |t|
      t.integer :user_id
      t.string :bio
      t.string :service_offered
      t.float :rate


      t.timestamps
    end
  end
end
