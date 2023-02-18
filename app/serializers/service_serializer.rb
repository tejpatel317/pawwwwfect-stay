class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :sitter_id, :description, :rate
end
