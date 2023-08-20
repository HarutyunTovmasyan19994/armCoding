import React from "react"
import Bint from "../../../assets/pictures/srbich.png";
import Vector from "../../../assets/pictures/Vector.png";
import TopBottomArrow from "../../../assets/pictures/Group8.png";
import LeftRightArrow from "../../../assets/pictures/Group11.png";
import Layer1 from "../../../assets/pictures/Vector2.png";
import PCS from "../../../assets/pictures/Group13.png";
import {NavLink} from "react-router-dom";




const Tops =()=>{
    return(
        <>
            <div className='binterUl'>
                <ul>
                    <li>
                        <NavLink
                            to="/product/Binter"
                            className={({isActive}) => isActive ? "navLinkActiveProduct" : "navLinkDisActiveProduct"}>Բինտեր</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/product/tanziffs"
                            className={({isActive}) => isActive ? "navLinkActiveProduct" : "navLinkDisActiveProduct"}>թանզիֆՆԵՐ</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/product/napkins"
                            className={({isActive}) => isActive ? "navLinkActiveProduct" : "navLinkDisActiveProduct"}>անձեռոցիկներ</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/product/tops"
                            className={({isActive}) => isActive ? "navLinkActiveProduct" : "navLinkDisActiveProduct"}>ԹՈՓԵՐ</NavLink>
                    </li>
                </ul>
            </div>
            <div className="products">
                <div className="product">
                    <img src={Bint} alt="" className="bintImg1"/>
                    <img src={Vector} alt="" className="vectorImg"/>
                    <p className="steral">ՍՏԵՐԻԼ</p>
                    <div className="doctor">
                        <p className="doctorPaper">բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                        <div className="infoBint">
                            <div className="bintSize">
                                <img src={TopBottomArrow} alt=""/>
                                <p className="satimater">90սմ</p>
                                <img src={LeftRightArrow} alt=""/>
                                <p className="satimater">100սմ</p>
                            </div>
                            <div className="bintSize">
                                <img src={TopBottomArrow} alt=""/>
                                <p className="satimater">90սմ</p>
                                <img src={LeftRightArrow} alt=""/>
                                <p className="satimater">200սմ</p>
                            </div>
                            <div className="bintSize">
                                <img src={TopBottomArrow} alt=""/>
                                <p className="satimater">120սմ</p>
                                <img src={LeftRightArrow} alt=""/>
                                <p className="satimater">200սմ</p>
                            </div>

                        </div>
                    </div>
                    <div className="seeMore">
                        <button>
                            ՏԵՍՆԵԼ Ավելին
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tops
