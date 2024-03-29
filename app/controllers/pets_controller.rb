class PetsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        
        if user.owner
            pets = user.owner.pets
            render json: pets
        elsif user.sitter
            render json: user.sitter.pets
        else
            render json: []
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        owner_id = user.owner.id
        pet = Pet.create!(pet_params.merge(owner_id: owner_id))
        render json: pet, status: :created
    end

    def destroy
        pet = Pet.find(params[:id])
        pet.destroy
        head :no_content
    end

    private

    def pet_params
        params.permit(:name, :species, :breed, :age, :weight, :image, :description)
    end

end
