import React, { useState, useEffect } from "react";
import "./Post.scss";
import likeFilled from "../../assets/likeFilled.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
// import bookmarkFilled from "../../assets/bookmarkFilled.png";
import bookmarkOutline from "../../assets/bookMarkOutline.png";
import likeOutline from '../../assets/likeOutline.png';
import { useNavigate } from "react-router-dom";


export default function Posts() {
    const navigate = useNavigate();
    if (!(localStorage.user)) {
        navigate('/signup');
    }


    let [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        getInstPosts();
        console.log('re-rendering...');
    }, [])


    async function getInstPosts() {
        await fetch("https://api.unsplash.com/photos?page=" + 4, {
            method: 'GET',
            cors: "true",
            headers: {
                "Authorization": "Client-ID WFptS3REbKwUXni8z0TZ6Bf4_ZaHdMokSoKyFefwUp4"
            }
        }).then(res => res.json()).then(res => {
            setPosts(res)
            localStorage.users = JSON.stringify(res);
        })
    }


    const postLiked = (id) => {
        let savedPost;
        setPosts([...posts.map((post) => {
            if (post.id === id) {
                if ('liked' in post) {
                    if (post.liked) {
                        post.liked = false;
                    }
                    else {
                        post.liked = true;
                        savedPost = post;
                    }
                }
                else {
                    post.liked = true;
                    savedPost = post;

                }
                return post;
            }

            return post;
        })])

        let storage = JSON.parse(localStorage.user);

        if (storage.offlinePosts) {
            storage.offlinePosts = Array.from(new Set([...storage.offlinePosts, savedPost]));
        }
        else {
            storage.offlinePosts = [];
            storage.offlinePosts.push(savedPost);
        }

        localStorage.user = JSON.stringify(storage);
    }




    return (
        <main className="posts">
            {posts && posts.map((post) => {
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
                            <span className="tag-line"><em>@{post.user.instagram_username} </em> {post.alt_description}</span>
                            <p className="icon-box">
                                <span>
                                    <img src={(post.liked) ? likeFilled : likeOutline} onClick={() => postLiked(post.id)} alt="icon" />
                                    <img src={comment} alt="icon" />
                                    <img src={share} alt="icon" />
                                </span>
                                <img src={bookmarkOutline} alt="icon" />
                            </p>
                        </section>
                    </article>
                )
            })}
        </main>
    );
}
