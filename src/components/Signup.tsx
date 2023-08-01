import React, { useState } from 'react';

export const Signup = () => {
  return (
    <div className='container'>
      <div className="form-wrapper">
        <div className="banner">
          <h1>Hello Friend!</h1>
          <p>Enter your personal details and start the journey with us</p>
        </div>
        <div className="blue-bgr">
          <button type="button">Sign Up</button>
        </div>
        <form className="sign-up">
          <h1>Create Account</h1>
          <div className="social-media">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <p>Use your email for registration</p>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Name"
            
            />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
           
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
           
            />
          </div>
          <button type="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
