class Owner < ApplicationRecord
    belongs_to :user
    has_many :comments
    
    validates :emergency_contact_number, presence: true, numericality: { only_integer: true }
end
