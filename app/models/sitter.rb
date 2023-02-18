class Sitter < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :services
  
    validates :bio, presence: true, length: { maximum: 1000 }
end
