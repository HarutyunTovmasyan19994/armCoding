import React, {useState} from "react";
import Header from "./components/header"
import LeftMenu from "./components/leftMenu";
import Routess from "./route"

function App() {
    const [toggele, setToggele] = useState(false)

    return (
        <>
            <Header setToggele={setToggele}/>
            {
                toggele ?
                    (<LeftMenu toggele={toggele} setToggele={setToggele}/>) : (<></>)
            }
            <Routess/>
        </>
    );
}

export default App;
