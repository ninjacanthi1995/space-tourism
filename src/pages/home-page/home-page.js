import './home-page.css'
import TopMenu from "../../share/top-menu/top-menu";

function HomePage() {
    return (
        <div className="home-page-container">
            <TopMenu activeIdx={0}/>

            <div className="texts-container">
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <button>EXPLORE</button>
        </div>
    );
}

export default HomePage;