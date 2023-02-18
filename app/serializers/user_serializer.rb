class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number, :address, :city, :state, :zip_code

  has_one :sitter
  has_one :owner
end
