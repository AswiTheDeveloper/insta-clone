import React from "react";
import "./Post.scss";
import { useState } from "react";
import likeFilled from "../../assets/likeFilled.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
import bookmarkFilled from "../../assets/bookmarkFilled.png";

export default function Posts() {
  const [time, setTime] = useState({
    time: "",
    date: "",
  });
  setInterval(() => {
    setTime({
      time: new Date().toLocaleTimeString(),
      date: new Date().toDateString(),
    });
  }, 1000);
  return (
    <main className="posts">
      <h1>
        INSTA CLONE{" "}
        <p>
          <span>{time.date}</span>
          <strong>{time.time}</strong>{" "}
        </p>
      </h1>
      <section>
        <p>
          <strong>Header/Routing:</strong> Aswi
        </p>
        <p>
          <strong>Feed/Explore:</strong>
        </p>
        <p>
          <strong>Insta Posts:</strong>Sai,Babji,kumar
        </p>
        <p>
          <strong>Chat:</strong> Kiran, Bhavani
        </p>
        <p>
          <strong>SignIn/SignUp(create Account): </strong> Sagar, Santhosh,
          VenkatSai{" "}
        </p>
      </section>

      <article className="insta-post">
        <section>
          <div className="top">
            <span>instagram</span>
          </div>

          <div>instagram</div>
          <p className="icon-box">
            <span>
              <img src={likeFilled} alt="icon" />
              <img src={comment} alt="icon" />
              <img src={share} alt="icon" />
            </span>
            <img src={bookmarkFilled} alt="icon" />
          </p>
        </section>
      </article>
    </main>
  );
}
