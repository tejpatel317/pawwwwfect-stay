class Service < ApplicationRecord
    belongs_to :sitter

    validates :description, presence: true
    validates :rate, numericality: { greater_than: 0 }
end
