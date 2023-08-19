import {Route, Routes} from "react-router-dom"
import Home from "./components/home/index"
import About from "./components/about/index"
import CoWorkers from "./components/coWorkers/index"
import FeedBack from './components/feedback/index'
import Product from './components/product/index'
import Services from "./components/services/index"





const Routess =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/coWorkers" element={<CoWorkers/>}/>
            <Route path="/feedback" element={<FeedBack/>}/>
        </Routes>
    )
}

export default Routess
