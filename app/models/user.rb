class User < ApplicationRecord
    has_one :owner
    has_one :sitter

    has_secure_password #Enables password encryption with bcrypt

    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true, numericality: { only_integer: true }
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true, numericality: { only_integer: true }
end
