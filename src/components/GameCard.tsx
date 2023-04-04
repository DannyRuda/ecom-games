import "./GameCard.scss"
import cyberpunk from './../assets/examplePicture.jpg'
import LikeIcon from "../assets/svgComponents/LikeIcon"
import InfoDetails from "./sub/InfoDetails"
import MetaRating from "./sub/MetaRating"
import { useState } from "react"
export default function GameCard(props: any) {

    const [showDetails,setShowDetails] = useState(false);

    function handleHover() {
        setShowDetails(!showDetails);
    }

    const classname = showDetails ? "info lift" : "info";

    return (
        <div className="gamecard" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="img" style={{backgroundImage: `url(${cyberpunk})`}}></div>
            
            <div className={classname}>
                <div className="info-header">
                    <h2>Dead Island 2</h2>
                    <LikeIcon />
                </div>
                <InfoDetails show={showDetails} />
                <div className="info-footer">
                    <MetaRating />
                    <button>39,99€</button>
                </div>
            </div>
        </div>
    )
}