import React from 'react'
import { Link } from 'react-router-dom'


const petBoardingImage = "https://tractive.com/blog/wp-content/uploads/2021/09/header_image_sleeping_place_dog.jpg"
const petSittingImage = "https://homesweethometucson.com/wp-content/uploads/2022/11/Dog-Cat-Sitting.jpg"
const petWalkingImage = "https://www.thesprucepets.com/thmb/LPUxuEE-eV8hIdUIh8QxyI3jaco=/3000x0/filters:no_upscale():strip_icc()/rules-for-walking-your-dog-1117437-01-9e2d4548f974456db20e7c5abe1c3291.jpg"

function Home() {
return (
<div>
  <div className="container">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center py-5">
          <h1 className="mb-4">Find the Perfect Pet Sitter or Boarding for Your Furry Friend</h1>
          <p className="mb-5">Whether you need a reliable pet sitter or want to offer your services as a pet sitter, our platform makes it easy for pet owners and sitters to connect. Sign up now and let us help you find your perfect match.</p>
          <Link to="/SignUp">
            <button className="btn btn-lg btn-dark">Sign Up Now</button>
          </Link>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
    <div className="service-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 mb-3">
              <img src={petBoardingImage} className="card-img-top" alt="Pet Boarding" />
              <div className="card-body text-center">
                <h5 className="card-title mb-2">Pet Boarding</h5>
                <p className="card-text">Find a safe and reliable place for your furry friend to stay while you're away.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 mb-3">
              <img src={petSittingImage} className="card-img-top" alt="Pet Sitting" />
              <div className="card-body text-center">
                <h5 className="card-title mb-2">Pet Sitting</h5>
                <p className="card-text">Get a trusted pet sitter to come to your home and take care of your pet while you're away.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 mb-3">
              <img src={petWalkingImage} className="card-img-top" alt="Pet Activity" />
              <div className="card-body text-center">
                <h5 className="card-title mb-2">Pet Activity</h5>
                <p className="card-text">Get a reliable and experienced dog walker to take your furry friend out for some exercise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-us-section text-center py-4 px-5">
      <h2 className="about-us-title">ABOUT US</h2>
      <p className="text-white">We're a platform that brings pet owners and sitters together. Our goal is to make it easy for pet owners to find trusted sitters, and for sitters to connect with pet owners in their area. Our platform is simple and user-friendly, so you can easily manage your bookings and communicate with your sitter or owner.</p>
    </div>
</div>
);
}

export default Home