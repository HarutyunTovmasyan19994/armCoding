import React,{useState} from "react";
import Modal from "../Modal/modal";
import IMG from "../../assets/pictures/Rectangle104.png"
import Ellipse from "../../assets/pictures/Ellipse.png"
import Bint from "../../assets/pictures/bint.png"
import Vector from "../../assets/pictures/Vector.png"
import TopBottomArrow from "../../assets/pictures/Group8.png"
import LeftRightArrow from "../../assets/pictures/Group11.png"
import Layer1 from "../../assets/pictures/Vector2.png"
import PCS from "../../assets/pictures/Group13.png"
import Rectangle from "../../assets/pictures/Rectangle.png"
import VagaFarm from "../../assets/pictures/ogimage.png"
import Map from "../../assets/pictures/Rectangle1.png"
import Vector1 from "../../assets/pictures/Vector1.png"
import Ellipse1 from "../../assets/pictures/Ellipse1.png"
import './index.css'



const Home = () => {
    const [modalActive,setModalActive] = useState(false)
    return (
        <div className="homeCommon">
            <div className="firstArmenia">
                <div className="firstArmeniaTextDiv">
                    <div>
                        <h1>ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h1>
                        <div>
                            <p>Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
                                բժշկական
                                վիրակապեր արտադրող;</p>
                        </div>
                        <button>
                            ԿԱՐԴԱԼ ԱՎԵԼԻՆ
                        </button>
                    </div>

                </div>
                <div className="ImgDiv">
                    <img src={IMG} alt="" className="IMG"/>
                    <img src={Ellipse} alt="" className="ellipse"/>
                </div>
            </div>

            <div className="productDiv">
                <p>ԱՐՏԱԴՐԱՆՔ</p>
                <div className="commonProduct">
                    <div className="products">
                        <div className="product">
                            <img src={Bint} alt="" className="bintImg"/>
                            <img src={Vector} alt="" className="vectorImg"/>
                            <p className="steral">ՍՏԵՐԻԼ</p>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seeMore">
                                <button>
                                    ՏԵՍՆԵԼ Ավելին
                                </button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={Bint} alt=""/>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ ՈՉ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seeMore">
                                <button>
                                    ՏԵՍՆԵԼ Ավելին
                                </button>
                            </div>

                        </div>
                        <div className="product">
                            <img src={Bint} alt=""/>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ Ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seeMore">
                                <button>
                                    ՏԵՍՆԵԼ Ավելին
                                </button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={Bint} alt=""/>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ Ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seeMore">
                                <button>
                                    ՏԵՍՆԵԼ Ավելին
                                </button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={Bint} alt=""/>
                            <img src={Vector} alt="" className="vectorImg"/>
                            <p className="steral">ՍՏԵՐԻԼ</p>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seeMore">
                                <button>
                                    ՏԵՍՆԵԼ Ավելին
                                </button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={Bint} alt=""/>
                            <img src={Vector} alt="" className="vectorImg"/>
                            <p className="steral">ՍՏԵՐԻԼ</p>
                            <div className="doctor">
                                <p className="doctorPaper">բժշկական անձեռոցիկ ՍՏԵՐԻԼ (ինդիվիդուալ)</p>
                                <div className="infoBint">
                                    <div className="bintSize">
                                        <img src={TopBottomArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                        <img src={LeftRightArrow} alt=""/>
                                        <p className="satimater">7,5սմ</p>
                                    </div>
                                    <div>
                                        <img src={Layer1} alt=""/>
                                        <p className="satimater1">12 շերտ</p>
                                    </div>
                                    <div>
                                        <img src={PCS} alt=""/>
                                        <p className="satimater1">10 հատ</p>
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
                    <div className="seeAll">
                        <button>
                            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
                        </button>
                    </div>
                </div>
                <div className="firstArmenia">
                    <div className="firstArmeniaTextDiv">
                        <div>
                            <h1 className="medicalSupplies">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h1>
                            <div>
                                <p className="weOffer">
                                    Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ
                                </p>
                            </div>
                            <button>
                                ԿԱՐԴԱԼ ԱՎԵԼԻՆ
                            </button>
                        </div>

                    </div>
                    <div className="ImgDiv">
                        <img src={Rectangle} alt="" className="IMG1"/>
                        <img src={Ellipse} alt="" className="ellipse1"/>
                    </div>
                </div>

                <div className="coWorkersCommon">
                    <div className="coWorkers">
                        <p>ԳՈՐԾԸՆԿԵՐՆԵՐ</p>
                    </div>
                    <div className="vagaFarm">
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                        <div className="vagaFarmDiv">
                            <img src={VagaFarm} alt=""/>
                        </div>
                    </div>
                    <div className="seeAll">
                        <button>
                            ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
                        </button>
                    </div>
                </div>

                <div className="contactUsCommon">
                        <div className="contactUsCommonNow">
                        <div className="longMap">
                            <p className="long">
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                here', making it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                over the years, sometimes by accident, sometimes on purpose (injected humour and the
                                lik
                            </p>
                            <div className="ImgDiv2">
                                <img src={Map} alt="" className="IMG2"/>
                                <img src={Ellipse} alt="" className="ellipse3"/>
                            </div>
                        </div>
                        <div className="sendContactUs">
                            <p>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</p>
                            <div className="form">
                                <input type="text" placeholder="Անուն"/>
                                <input type="text" placeholder="Էլ․հասցե"/>
                                <input type="text" className="message" placeholder="Հաղորդագրություն" />
                                <button className="sentBtn" onClick={()=>setModalActive(true)}>
                                    ՈՒՂԱՐԿԵԼ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                >
                    <div className="thanlYouDiv">
                        <p className="thankYouP">
                            ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
                        </p>
                        <p className="ourSpecalist">ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</p>
                        <div className="elispseVector">
                            <div>
                                <img src={Ellipse1} alt="" className="ellipse4"/>
                                <img src={Vector1} alt="" className="vector1"/>
                            </div>
                        </div>
                    </div>
                </Modal>
                </>
            </div>
        </div>
    )
}

export default Home
