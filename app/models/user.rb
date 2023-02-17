class User < ApplicationRecord
    has_one :owner
    has_one :sitter

    has_secure_password #Enables password encryption with bcrypt

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true
end
