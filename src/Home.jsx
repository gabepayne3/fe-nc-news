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
                <img className="articles-img" src="https://www.svgrepo.com/show/418372/bulletin-journal-magazine.svg" alt="articles" />
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
