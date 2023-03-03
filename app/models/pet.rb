class Pet < ApplicationRecord
    belongs_to :owner
    has_many :bookings
    
    validates :name, presence: true
    validates :species, presence: true
    validates :breed, presence: true
    validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
    validates :weight, numericality: { greater_than_or_equal_to: 0 }
    validates :image, presence: true
end
