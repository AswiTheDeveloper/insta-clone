import "./LeftAside.scss";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
const LeftAside = () => {
    return (
        <main className="LeftAside">
            <header>
                <nav>
                    <Avatar className="user-Icon">S</Avatar>
                    <section>
                        <h1>Sahu Pawan Kalyan</h1>
                        <p>Full-stack Developer</p>
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
                    <AccountCircleSharpIcon className='friend-ChatIcon' />
                    <article>
                        <h1>Friend Name</h1>
                        <p>hello hi</p>
                    </article>
                </section>
            </div>
        </main>
    )
}
export default LeftAside;