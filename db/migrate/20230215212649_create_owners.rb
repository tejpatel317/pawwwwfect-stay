class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.integer :user_id
      t.string :emergency_contact_number

      t.timestamps
    end
  end
end
