class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        ActiveRecord::Base.transaction do
            user = User.create!(user_params)
            role = params[:role]
            session[:user_id] = user.id

            if role == "sitter"
                sitter = Sitter.create!(sitter_params.merge(user_id: user.id))
                service_params.each do |t|
                    Service.create!(t.merge(sitter_id: sitter.id))
                end
            elsif role == "owner"
                owner = Owner.create!(owner_params.merge(user_id: user.id))
            end
            render json: user, include: ['owner.pets' , 'sitter.services'], status: :created
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: ['owner.pets' , 'sitter.services']
    end


    private
        
    def user_params
        params.permit(
        :email,
        :password,
        :password_confirmation,
        :first_name,
        :last_name,
        :phone_number,
        :address,
        :city,
        :state,
        :zip_code
        )
    end


    def owner_params
        params.permit(:emergency_contact_number)
      end
      
    def sitter_params
        params.permit(:bio, :image)
    end

    def service_params
        params[:services].map do |t|
          t.permit(:description, :rate).to_h
        end
    end
      
end
