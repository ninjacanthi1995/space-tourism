import './crew-page.scss'
import TopMenu from "../../share/top-menu/top-menu";
import {Link} from "react-router-dom";
const data = require("../../assets/data.json")
console.log(data)

function CrewPage(props) {
    const currentCrew = data.crew[props.crewIdx];
    const currentCrewNameUrl = currentCrew.name.toLowerCase().split(' ').join('-')
    const links = data.crew.map((crew, index) => {
        let crewNameUrl = crew.name.toLowerCase().split(' ').join('-')
        return <Link to={`/crew/${crewNameUrl}`} className={(props.crewIdx === index && 'active')}></Link>
    })

    return (
        <div className="crew-page-container">

            <TopMenu activeIdx={2}/>

            <div className="texts-nav-container">

                <h5 className="heading-5"><span>02</span>Meet your crew</h5>

                <img className="crew-img" src={`../../assets/crew/image-${currentCrewNameUrl}.png`} />

                <hr/>

                <h4 className="heading-4">{currentCrew.role}</h4>

                <h3 className="heading-3">{currentCrew.name}</h3>

                <p className="body-text">{currentCrew.bio}</p>

                <nav className="crews-nav">
                    {links}
                </nav>

            </div>

            <img className="crew-img" src={`../../assets/crew/image-${currentCrewNameUrl}.png`} />

        </div>
    );
}

export default CrewPage;