import React from "react";
import Flag from "../../assets/pictures/flag.png"
import "./index.css"
import {NavLink} from "react-router-dom";


const LeftMenu = ({toggele, setToggele}) => {
    const handleToggle = () => {
        setToggele(prev => !prev)
    }
    return (
        <div className={toggele ? "leftMenu" : "leftMenu1"}>
            <div>
                <ul className="leftMenuUl">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Գլխավոր</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Մեր
                            Մասին</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product"
                                 className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Արտադրանք</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services"
                                 className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Ծառայություններ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coWorkers"
                                 className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Գործընկերներ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/feedback"
                                 className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}
                                 onClick={handleToggle}>Հետադարձ
                            կապ</NavLink>
                    </li>
                    <li>
                        <img src={Flag} alt="Flag"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftMenu
