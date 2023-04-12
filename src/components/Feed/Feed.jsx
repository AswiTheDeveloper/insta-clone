import React from "react";
import "./feed.scss";
import profilePic from "../../assets/avatar.png";
import location from "../../assets/location.png";
export default function Feed() {
  return (
    <main className="temp-profile">
      <header>HEADEAR</header>
      <div className="aside-profile">
        <aside>
          <img className="profile-pic" src={profilePic} alt="avatar" />
          <article className="profile-details">
            <h2>User Name</h2>
            <p>User Email</p>
            <p>User Role</p>

            <p className="location">
              <img  src={location} alt="" /> User Country
            </p>
            <p>
              <b>User About</b> :Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Architecto, culpa.
            </p>
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
