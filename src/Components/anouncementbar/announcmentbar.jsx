import { useState } from "react";
import Anouncementbtn from "../../assets/anouncementbtn.png"
import "./announcmentbar.css"

function Anouncementbar(){
     const [showAnnouncement, setShowAnnouncement] = useState(true);
    return showAnnouncement && (
        <>
        <div id="anouncementbar">
        <div className="anouncement">
        <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
        <img id="anouncementbtn" src={Anouncementbtn} alt="Button" onClick={() => setShowAnnouncement(false)} />
        </div>
        </div>
        </>
    )
}
export default Anouncementbar;