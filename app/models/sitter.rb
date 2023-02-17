class Sitter < ApplicationRecord
    belongs_to :user
    has_many :comments
  
    validates :bio, presence: true, length: { maximum: 1000 }
    validates :service_offered, presence: true
    validates :rate, numericality: { greater_than: 0 }
end
