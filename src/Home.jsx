import { Link } from "react-router-dom";
function Home(){
    return (
    <div>
    <ol className="home-nav">
        <li>
            <Link to="/topics">
                <img src="https://r-topics.org/logo.png" alt="topics" />
            </Link>
        </li>
        <li>
            <Link to="/articles">
                <img src="https://svgsilh.com/svg/160414.svg" alt="articles" />
            </Link>
        </li>
        <li>
            <Link to="/login">
                <img src="" alt="login" />
            </Link>
        </li> 
    </ol>
</div>
    )
}
export default Home
