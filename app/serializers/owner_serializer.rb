class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :emergency_contact_number
end
