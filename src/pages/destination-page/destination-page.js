import './destination-page.scss'
import TopMenu from "../../share/top-menu/top-menu";
import {Link} from "react-router-dom";
const data = require("../../assets/data.json")
console.log(data)

function DestinationPage(props) {
    const links = data.destinations.map((destination, index) => {
        return <Link to={`/destination/${destination.name.toLowerCase()}`} className={'nav-text ' + (props.planetIdx === index && 'active')}>{destination.name}</Link>
    })

    const planet = data.destinations[props.planetIdx];

    return (
        <div className="destination-page-container">
            <TopMenu activeIdx={1}/>

            <h5 className="heading-5"><span>01</span>Pick your destination</h5>

            <div className="texts-img-container">
                <img className="planet-img" src={`../../assets/destination/image-${planet.name}.png`} />

                <div className="destination-page-texts-container">

                    <nav className="destinations-nav">
                        {links}
                    </nav>

                    <h2 className="heading-2">{planet.name}</h2>

                    <p className="body-text">{planet.description}</p>

                    <hr />

                    <div className="details-container">
                        <div className="detail-container">
                            <h6 className="sub-heading-2">AVG. DISTANCE</h6>
                            <h6 className="sub-heading-1">{planet.distance}</h6>
                        </div>
                        <div className="detail-container">
                            <h6 className="sub-heading-2">Est. travel time</h6>
                            <h6 className="sub-heading-1">{planet.travel}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DestinationPage;