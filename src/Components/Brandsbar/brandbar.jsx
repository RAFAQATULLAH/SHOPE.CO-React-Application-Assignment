import Versace from "../../assets/versace.png"
import Zara from "../../assets/zara.png"
import Gucci from "../../assets/gucci.png"
import Prada from "../../assets/prada.png"
import Calvin from "../../assets/calvin.png"
import "./brandbar.css"

function Brandbar(){
    return (
        <>
    <div className="brandbar">
        <div className="brand">
            <div className="b1">
                <img src={Versace} alt="Versace" />
            </div>
            <div className="b2">
                <img src={Zara} alt="Zara" />
            </div>
            <div className="b3">
                <img src={Gucci} alt="Gucci" />
            </div>
            <div className="b4">
                <img src={Prada} alt="Prada" />
            </div>
            <div className="b5">
                <img src={Calvin} alt="Calvin" />
            </div>
        </div>
    </div>
    </>
    )
}

export default Brandbar;