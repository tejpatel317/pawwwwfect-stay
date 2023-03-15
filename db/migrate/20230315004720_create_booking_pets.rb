class CreateBookingPets < ActiveRecord::Migration[6.1]
  def change
    create_table :booking_pets do |t|
      t.integer :booking_id
      t.integer :pet_id

      t.timestamps
    end
  end
end
