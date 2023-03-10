class SitterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :bio, :image

  has_many :services
  has_many :bookings
end
