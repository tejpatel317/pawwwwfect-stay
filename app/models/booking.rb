class Booking < ApplicationRecord
    belongs_to :sitter
    has_many :pets


    validates :pet, :sitter, :start_date, :end_date, :price, presence: true
    validates :status, inclusion: { in: [true, false] }
    validate :end_date_is_after_start_date

    private

    def end_date_is_after_start_date
        if end_date.present? && start_date.present? && end_date < start_date
            errors.add(:end_date, "must be after the start date")
        end
    end

end
