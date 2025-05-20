import {Link} from "react-router"

function NavBar() {
    return (
        <nav className="navi">
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/login">Log In</Link>
        </nav>
    )
}

export default NavBar