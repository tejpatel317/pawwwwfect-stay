class PetsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        owner_id = user.owner.id
        pet = Pet.create!(pet_params.merge(owner_id: owner_id))
        render json: user, include: ['owner.pets' , 'sitter.services'], status: :created
    end

    private

    def pet_params
        params.permit(:name, :species, :breed, :age, :weight, :image, :description)
    end

end
