class BookingSerializer < ActiveModel::Serializer
  attributes :id, :pet_id, :sitter_id, :start_date, :end_date, :price, :status, :service_type
end
