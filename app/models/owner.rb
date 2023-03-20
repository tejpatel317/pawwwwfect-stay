class Owner < ApplicationRecord
    belongs_to :user
    has_many :pets
    has_many :bookings, through: :pets
    
    validates :emergency_contact_number, presence: true, numericality: { only_integer: true }
end
