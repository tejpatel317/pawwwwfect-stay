class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :pet_id
      t.integer :sitter_id
      t.date :start_date
      t.date :end_date
      t.float :price
      t.string :service_type
      t.boolean :status

      t.timestamps
    end
  end
end
