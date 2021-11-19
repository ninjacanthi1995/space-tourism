import './top-menu.css'
import {Link} from "react-router-dom";

function TopMenu(props) {
    return (
        <div className="top-menu-container">
            <img src="../../assets/shared/logo.svg" />

            <div className="line-container">
                <hr className="line" />
            </div>

            <div className="links-container">
                <Link to="/" className={'nav-text ' + (props.activeIdx === 0 && 'active')} ><span>00</span>Home</Link>
                <Link to="/destination/moon" className={'nav-text ' + (props.activeIdx === 1 && 'active')}><span>01</span>Destination</Link>
                <Link to="/crew/douglas-hurley" className={'nav-text ' + (props.activeIdx === 2 && 'active')}><span>02</span>Crew</Link>
                <Link to="/technology/launch-vehicle" className={'nav-text ' + (props.activeIdx === 3 && 'active')}><span>03</span>Technology</Link>
            </div>
        </div>
    )
}

export default TopMenu;