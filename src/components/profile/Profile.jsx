import React from "react";
import "./profile.scss";
import profilePic from "../../assets/avatar.png";
import location from "../../assets/location.png";
export default function Feed() {


  let user = JSON.parse(localStorage.user);


  return (
    <main className="temp-profile">
      <header></header>
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

        <section className="offline-posts">
          <h4 className="liked-posts">Liked Posts</h4>
          <hr />
          <main>

            {user?.offlinePosts && user.offlinePosts.map((post) => {
              return (
                <article className="insta-post" key={post.id}>
                  <section>
                    <p className="profile-head"> <img src={post.user.profile_image.large} alt="" />
                      <span className="user-name-field">
                        <strong>{post.user.name}</strong>
                        <span> @{post.user.instagram_username}</span>
                      </span>
                    </p>
                    <img src={post?.urls?.small} alt="" />
                  </section>
                </article>)
            })
            }




          </main>
        </section>
      </div>
    </main>
  );
}
