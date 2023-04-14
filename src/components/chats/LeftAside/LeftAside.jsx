import "./LeftAside.scss";
import { useNavigate } from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
const LeftAside = ({ setCurrentUser }) => {
    let navigate = useNavigate();
    if (!(sessionStorage.userLoggedIn)) {
        navigate('/signin');
    }
    let user = JSON.parse(localStorage.user);
    let users = JSON.parse(localStorage.users);
    console.log(users);

    return (
        <main className="LeftAside">
            <header>
                <nav>
                    <Avatar className="user-Icon">{user.name.slice(0, 1)}</Avatar>
                    <section>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </section>
                </nav>
                <article>
                    <EditOutlinedIcon />
                </article>
            </header>

            <div className="friendsList">
                <section className="leftsearch">
                    <SearchSharpIcon />
                    <input type="search" placeholder="Search Friends..." />
                </section>
                <section className="chatList">
                    {users.map((user) => {
                        return (
                            <article>
                                <img src={user.user.profile_image.medium} alt="img" />
                                <div onClick={() => {
                                    setCurrentUser({
                                        name: user.user.name,
                                        profilePic: user.user.profile_image.medium,
                                        username: user.user.instagram_username,
                                        chat: []
                                    });
                                }}>
                                    <h1>{user.user.name}</h1>
                                    <p>{user.user.social.instagram_username}</p>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}
export default LeftAside;