import React from "react";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
// import { ImFacebook2, ImTwitter } from "react-icons/im";
import login from "./login.png";
import "./sign-in.scss";

const SignIn = () => {
  return (
    <main className="sign-in">
      <nav>
        <h3>Insta Sign In</h3>{" "}
        <p>
          New User? <Link to="/posts">Sign Up</Link>
        </p>
      </nav>

      <section className="login-container">
        <img className="image" src={login} alt="login-pic" />
        <div className="main">
          <form className="form-container">
            <div className="log-text">
              <h1>Welcome Back!</h1>
              <p>Login to continue</p>
            </div>
            <label className="input-label" htmlFor="text">
              <HiUser />
              <input
                className="input-field"
                type="text"
                id="text"
                placeholder="Enter your E-mail"
              />
            </label>
            <label className="input-label" htmlFor="password">
              <IoMdLock />
              <input
                className="input-field"
                type="password"
                id="password"
                placeholder="Enter your Password"
              />
            </label>
            <div className="login-password">
              <button type="submit" className="login-btn">
                LOGIN
              </button>
              <span>forget password</span>
            </div>
          </form>
          <div className="parent">
            {/* <p>Login with</p> <FcGoogle /> <ImFacebook2 /> <ImTwitter /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
