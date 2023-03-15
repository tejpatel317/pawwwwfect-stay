class BookingSerializer < ActiveModel::Serializer
  attributes :id, :sitter_id, :start_date, :end_date, :price, :status, :service_type

  has_many :booking_pets
end
