class SitterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :bio

  has_many :services
end
