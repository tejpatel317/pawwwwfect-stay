require 'faker'

# Generate unique emails and phone numbers
emails = []
phone_numbers = []
70.times do
  emails << Faker::Internet.unique.email
  phone_numbers << Faker::Number.unique.number(digits: 10).to_s
end

# Create 50 owners
50.times do |i|
  user = User.create!(
    email: emails[i],
    password: 'password',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: phone_numbers[i],
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip_code: Faker::Address.zip_code.gsub(/\D/, '')
  )

  owner = Owner.create!(
    user: user,
    emergency_contact_number: Faker::Number.number(digits: 10).to_s
  )

  num_pets = Faker::Number.between(from: 1, to: 4)

  num_pets.times do
    Pet.create!(
      owner: owner,
      name: Faker::Creature::Dog.name,
      species: 'Dog',
      breed: Faker::Creature::Dog.breed,
      age: Faker::Number.between(from: 1, to: 16),
      weight: Faker::Number.between(from: 5, to: 150),
      image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['pets', 'dogs']),
      description: Faker::Lorem.paragraph
    )
  end
end

# Create 20 sitters with services
20.times do |i|
  user = User.create!(
    email: emails[i+50],
    password: 'password',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: phone_numbers[i+50],
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip_code: Faker::Address.zip_code.gsub(/\D/, '')
  )

  sitter = Sitter.create!(
    user: user,
    image: Faker::Avatar.image,
    bio: Faker::Lorem.sentence
  )

  # Generate unique services for the sitter
  services = ['Pet Boarding', 'Pet Sitting', 'Pet Activity'].shuffle

  # Determine the number of services for the sitter
  num_services = Faker::Number.between(from: 1, to: 3)

  # Create services for the sitter
  num_services.times do
    description = services.pop
    rate = Faker::Commerce.price(range: 10..50.0, as_string: true)
    sitter.services.create!(
      description: description,
      rate: rate
    )
  end

end