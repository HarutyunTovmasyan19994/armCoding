import React from "react";
import Logo from '../../assets/logo/logo.png'
import Flag from '../../assets/pictures/flag.png'
import { NavLink } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import "./index.css"


const Header =({setToggele})=>{

    const handleMenu = ()=>{
        setToggele(prev=>!prev)
    }

    return(
        <div className="header">
            <div>
            <img src={Logo} className="img"/>
            </div>
            <div className="uls">
                <ul className="ul">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "navLinkActive" : "navLinkDisActive"}>Գլխավոր</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) =>isActive ? "navLinkActive" : "navLinkDisActive"}>Մեր Մասին</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className={({isActive}) =>isActive ? "navLinkActive" : "navLinkDisActive"}>Արտադրանք</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({isActive}) =>isActive ? "navLinkActive" : "navLinkDisActive"}>Ծառայություններ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coWorkers" className={({isActive}) =>isActive ? "navLinkActive" : "navLinkDisActive"}>Գործընկերներ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/feedback" className={({isActive}) =>isActive ? "navLinkActive" : "navLinkDisActive"}>Հետադարձ կապ</NavLink>
                    </li>
                    <li><img src={Flag}/></li>
                </ul>
            </div>
            <div className="icons">
                <AiOutlineMenu size={35} onClick={handleMenu}/>
                </div>
        </div>
    )
}

export default Header
