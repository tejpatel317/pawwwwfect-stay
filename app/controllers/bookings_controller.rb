class BookingsController < ApplicationController

    def create
        bookings = []
        pet_ids = params[:pet_ids] || []
        pet_ids.each do |pet_id|
            booking = Booking.create!(booking_params.merge(pet_id: pet_id, status: false))
            bookings << booking
        end
        render json: bookings, status: :created
    end

    private

    def booking_params
        params.permit(:sitter_id, :start_date, :end_date, :price)
    end

end