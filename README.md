# Pawwwwfect-Stay

The Pawwwwfect-Stay app is a booking website that connects pet owners with pet sitters. It is built with a React frontend and a Rails backend, and uses PostgreSQL as the database management system.

## Features

- Users can sign up as either an owner or a sitter, and can log in to access their respective pages.
- Sitters can view and accept or cancel booking requests from owners.
- Owners can view a list of available sitters based on their search criteria, and can request bookings from sitters.
- Owners can add and manage their pets
- Owners can view their bookings requests, upcoming bookings, and booking history. 
- Owners can cancel their booking requests. 


## Schema

- `users`
- `sitters`
- `owners`
- `pets`
- `bookings`
- `booking_pets`


## Associations

The following associations exist between the tables:

- `User` has one `Owner` or `Sitter`.
- `Sitter` has many `Services`, `Bookings`, and `Pets`, and belongs to one `User`.
- Owner has many `Pets` and `Bookings`, and belongs to one `User`.
- `Service` belongs to one `Sitter`.
- `Pet` belongs to one `Owner` and has many `BookingPets` and `Bookings`.
- `Booking` belongs to one `Sitter` and has many `BookingPets` and `Pets`.
- `BookingPet` belongs to one `Booking` and one `Pet`.
## Pages
The Pawwwwfect-Stay app includes the following pages:

### For Anonymous Users
- **Home:** Displays a description of the app and its features, and includes a call-to-action button to sign up or log in.
- **Log In:** Allows users to log in to their account. Includes a link to the sign-up page for new users.
- **Sign Up:** Allows new users to create an account. Includes a link to the log-in page for existing users.

### For Sitters:
- **Booking:** Shows a list of booking requests from owners. Includes information about the owner and pets, and allows the sitter to accept or decline the booking.
- **Account:** Displays account details for the sitter.

### For Owners:
- **Home:** Shows a list of available sitters based on search criteria (service, city, zip code, and dates). Owners can select their desired pets, service, and dates for their booking request, and the total price is displayed.
- **Booking:** Shows a list of booking requests sent to sitters, and their corresponding status. Includes information about the sitter, and allows owners to cancel bookings.
- **Pet:** Allows owners to add and manage their pets. Pet information is displayed in cards.
- **Account:** Displays account details for the owner.
## Getting Started

1. Clone the repository to your local machine.
2. Run `bundle install` to install the required gems.
3. Run `rails db:create` and `rails db:migrate` to create and migrate the database.
4. Run `rails s` to start the server.
5. In a separate terminal, navigate to the `client` directory and run `npm install` to install the required dependencies.
6. Run `npm start` to start the React app.
7. Open your browser and go to `localhost:3000` to view the app.


