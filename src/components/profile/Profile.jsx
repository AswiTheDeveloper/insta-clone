import React from "react";
import "./profile.scss";
import profilePic from "../../assets/avatar.png";
import location from "../../assets/location.png";
export default function Feed() {


  let user = JSON.parse(localStorage.user);








  return (
    <main className="temp-profile">
      <header>HEADEAR</header>
      <div className="aside-profile">
        <aside>
          <img className="profile-pic" src={profilePic} alt="avatar" />
          <article className="profile-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.role}</p>

            <p className="location">
              <img src={location} alt="" /> {user.country}
            </p>
            <p>
              <b>{user.about}</b>
            </p>
            <p>Lorem ipsum, dolor sit amet conse</p>
          </article>
        </aside>

        <section>
          <h4 className="liked-posts">Liked Posts</h4>
          <hr />
        </section>
      </div>
    </main>
  );
}
