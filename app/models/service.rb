class Service < ApplicationRecord
    belongs_to :sitter

    validates :service_offered, presence: true
    validates :rate, numericality: { greater_than: 0 }
end
