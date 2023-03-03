class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :emergency_contact_number

  has_many :pets
end
