import './technology-page.scss'
import TopMenu from "../../share/top-menu/top-menu";
import {Link} from "react-router-dom";
const data = require("../../assets/data.json")

function TechnologyPage(props) {
    const currentTechnology = data.technology[props.technologyIdx];
    const currentTechnologyNameUrl = currentTechnology.name.toLowerCase().split(' ').join('-')
    const links = data.technology.map((technology, index) => {
        let technologyNameUrl = technology.name.toLowerCase().split(' ').join('-')
        return <Link to={`/technology/${technologyNameUrl}`} className={'heading-4 ' + (props.technologyIdx === index && 'active')}>{index + 1}</Link>
    })

    return (
        <div className="technology-page-container">

            <TopMenu activeIdx={3}/>

            <h5 className="heading-5"><span>03</span>Space launch 101</h5>

            <div className="nav-texts-img-container">

                <div className="technology-nav-texts-container">
                    <nav>{links}</nav>

                    <div className="technology-texts-container">

                        <p className="nav-text">The terminology...</p>

                        <h3 className="heading-3">{currentTechnology.name}</h3>

                        <p className="body-text">{currentTechnology.description}</p>

                    </div>
                </div>

                <img className="img-portrait" src={`../../assets/technology/image-${currentTechnologyNameUrl}-portrait.jpg`} />
                <img className="img-landscape" src={`../../assets/technology/image-${currentTechnologyNameUrl}-landscape.jpg`} />

            </div>

        </div>
    );
}

export default TechnologyPage;