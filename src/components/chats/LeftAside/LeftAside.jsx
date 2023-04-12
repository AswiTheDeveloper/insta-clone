import "./LeftAside.scss";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
const LeftAside = () => {
    return (
        <main className="LeftAside">
            <header>
                <aside>
                    <Avatar>S</Avatar>
                </aside>
                <section>
                    <h1>Sahu</h1>
                    <p>Full-stack Developer</p>
                </section>
                <article>
                    <EditOutlinedIcon />
                </article>
            </header>
            <section>
                <SearchSharpIcon />
                <input type="text" placeholder="searchbyusername" />
            </section>
            <section>
                <aside>
                    <article>logo</article>
                    <article>
                        <h1>kiran</h1>
                        <p>ajsbkaj</p>
                    </article>
                </aside>
            </section>
        </main>
    )
}

export default LeftAside;