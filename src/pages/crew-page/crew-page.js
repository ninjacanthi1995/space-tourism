import './crew-page.css'
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

            <h5 className="heading-5"><span>02</span>Meet your crew</h5>

            <h4 className="heading-4">{currentCrew.role}</h4>

            <h3 className="heading-3">{currentCrew.name}</h3>

            <div className="crew-page-texts-container">

                <p className="body-text">{currentCrew.bio}</p>

            </div>

            <img className="crew-img" src={`../../assets/crew/image-${currentCrewNameUrl}.png`} />

            <nav className="crews-nav">
                {links}
            </nav>

        </div>
    );
}

export default CrewPage;