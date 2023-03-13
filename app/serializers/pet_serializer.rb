class PetSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :name, :species, :breed, :age, :weight, :image, :description
  
end
