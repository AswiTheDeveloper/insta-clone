import React from "react";
import { Link } from "react-router-dom";
import login from "../../../assets/profile.png";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <main className="sign-up">
      <nav className="navigation">
        <h3>Insta Sign Up</h3>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </nav>
      <section className="signup-container">
        <article className="img-container">
          <img src={login} alt="signup-pic" />
        </article>
        <article className="signup-form-container">
          <h2>Create your account</h2>
          <form className="signup-form">
            <label htmlFor="fullname">
              Full Name
              <input type="text" id="fullname" placeholder="Enter your full name" required/>
            </label>
            <label htmlFor="email">
              E-mail
              <input type="email" id="email" placeholder="Enter your e-mail" required/>
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" placeholder="Enter your password" required/>
            </label>
            <label htmlFor="cnfpassword">
              Confirm Password
              <input type="password" id="cnfpassword" placeholder="Re-enter your password" required/>
            </label>
            <div className="row">
            <label htmlFor="role">
              Role
              <input type="text" id="role" placeholder="Your role" required/>
            </label>
            <label htmlFor="country">
              Country
              <select required>
                <option value="">select your country</option>
                <option value="india" selected>
                  INDIA
                </option>
                <option value="china">CHINA</option>
                <option value="japan">JAPAN</option>
                <option value="kuwait">KUWAIT</option>
              </select>
            </label>
            </div>

            <label htmlFor="about">
              About Yourself
              <textarea name="about" id="about" cols="30" rows="3" placeholder="Writer about yourself....." required></textarea>
            </label>
            <div className="create-btn">
              <input type="checkbox" name="tnc" id="tnc" />
              <label htmlFor="tnc">agree to the terms and privacy policy</label>
            </div>
            <button type="submit">Create Account</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default SignUp;
