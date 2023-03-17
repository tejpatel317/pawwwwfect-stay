class Booking < ApplicationRecord
    belongs_to :sitter
    has_many :booking_pets, dependent: :destroy
    has_many :pets, through: :booking_pets

    validates :start_date, :end_date, :price, presence: true
    validates :status, inclusion: { in: [true, false] }
    validate :sitter_availability

    private

    def sitter_availability

        return unless new_record?

        bookings = Booking.where(sitter_id: sitter_id)
    
        bookings.each do |booking|

            if date_range_overlap?(start_date, end_date, booking.start_date, booking.end_date)
                errors.add(:base, "The sitter is not available for the selected dates")
            end
        end
    end

    def date_range_overlap?(start_date1, end_date1, start_date2, end_date2)
        start_date1 <= end_date2 && start_date2 <= end_date1
    end

end
