import React, { useState, useEffect } from "react";
import "./Post.scss";
import likeFilled from "../../assets/likeFilled.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
import bookmarkFilled from "../../assets/bookmarkFilled.png";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getInstPosts();
    }, [])

    async function getInstPosts() {
        await fetch("https://api.unsplash.com/photos?page=" + 1, {
            method: 'GET',
            cors: "true",
            headers: {
                "Authorization": "Client-ID WFptS3REbKwUXni8z0TZ6Bf4_ZaHdMokSoKyFefwUp4"
            }
        }).then(res => res.json()).then(res => {
            setPosts(res)
            console.log(res)

        })
    }







    return (
        <main className="posts">
            {posts && posts.map((post) => {
                return (

                    <article className="insta-post">
                        <section>


                            <img src={post.urls.small} alt="" />

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
                )
            })}
        </main>
    );
}
