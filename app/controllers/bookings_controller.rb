class BookingsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])

        if user.owner
            pets = user.owner.pets
            unique_bookings = Set.new
            pets.each { |pet| pet.bookings.each { |booking| unique_bookings.add(booking) } }
            render json: unique_bookings.to_a
        elsif user.sitter
            bookings = user.sitter.bookings
            render json: bookings
        else
            render json: []
        end
    end

    def create
        booking = Booking.create!(booking_params.merge(status: false))
        pet_ids = params[:pet_ids] || []
        pet_ids.each do |pet_id|
            BookingPet.create!(booking_id: booking.id, pet_id: pet_id)
        end
        render json: booking, status: :created
    end

    def destroy
        booking = Booking.find(params[:id])
        booking.destroy
        head :no_content
    end

    private

    def booking_params
        params.permit(:sitter_id, :start_date, :end_date, :price, :service_type)
    end

end