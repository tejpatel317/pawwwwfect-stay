class BookingsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        pets = user.owner.pets
        bookings = pets.map { |pet| pet.bookings }.flatten
        render json: bookings
    end

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
        params.permit(:sitter_id, :start_date, :end_date, :price, :service_type)
    end

end