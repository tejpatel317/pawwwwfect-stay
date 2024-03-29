Rails.application.routes.draw do
  resources :pets, only: [:index, :create, :destroy]
  resources :bookings, only: [:index, :create, :update, :destroy]
  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
