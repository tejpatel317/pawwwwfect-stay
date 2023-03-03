class Sitter < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :services
    has_many :bookings
    has_many :pets, through: :bookings
  
    validates :bio, presence: true, length: { maximum: 1000 }
end
