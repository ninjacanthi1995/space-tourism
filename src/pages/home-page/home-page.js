import './home-page.scss'
import TopMenu from "../../share/top-menu/top-menu";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="home-page-container">
            <TopMenu activeIdx={0}/>

            <div className="texts-container">
                <h5 className="heading-5">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="heading-1">SPACE</h1>
                <p className="body-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <Link to="/destination/moon" className="button-link" ><button className="heading-4">EXPLORE</button></Link>
        </div>
    );
}

export default HomePage;