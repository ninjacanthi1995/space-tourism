import './top-menu.scss'
import {Link} from "react-router-dom";

function TopMenu(props) {
    const openMenu = () => {
        const menuButton = document.getElementById("menu-button")
        const linksContainer = document.getElementsByClassName("links-container")[0];
        linksContainer.style.display = 'flex';
        menuButton.style.display = 'none';
    }

    const closeMenu = () => {
        document.getElementsByClassName("links-container")[0].style.display = 'none';
        document.getElementById("menu-button").style.display = 'block';
    }

    return (
        <div className="top-menu-container">
            <img id="logo" src="../../assets/shared/logo.svg" />

            <hr className="line" />

            <div className="links-container">
                <img id="close-button" src="../../assets/shared/icon-close.svg" onClick={closeMenu}/>
                <Link to="/" className={'nav-text ' + (props.activeIdx === 0 && 'active')} ><span>00</span>Home</Link>
                <Link to="/destination/moon" className={'nav-text ' + (props.activeIdx === 1 && 'active')}><span>01</span>Destination</Link>
                <Link to="/crew/douglas-hurley" className={'nav-text ' + (props.activeIdx === 2 && 'active')}><span>02</span>Crew</Link>
                <Link to="/technology/launch-vehicle" className={'nav-text ' + (props.activeIdx === 3 && 'active')}><span>03</span>Technology</Link>
            </div>

            <img id="menu-button" src="../../assets/shared/icon-hamburger.svg" onClick={openMenu} />
        </div>
    )
}

export default TopMenu;