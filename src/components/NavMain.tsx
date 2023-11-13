import {Link} from "react-router-dom"

const NavMain: React.FC = () => {
    return (
        <nav>
            <div className="logo">SnakeBlog</div>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/post">Post</Link>
            </div>
        </nav>
    )
}

export default NavMain;