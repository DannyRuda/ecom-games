import "./GameCard.scss"
import cyberpunk from './../assets/examplePicture.jpg'
import LikeIcon from "../assets/svgComponents/LikeIcon"
import InfoDetails from "./sub/InfoDetails"
import MetaRating from "./sub/MetaRating"
import { useState } from "react"
export default function GameCard(props: any) {

    const [showDetails,setShowDetails] = useState(false);
    const [zoom,setZoom] = useState(false);


    function handleDetails() {
        setShowDetails(!showDetails);
    }

    function handleZoom(e:any) {
        if(e.type === "mouseenter") {
            setZoom(true);
        } else {
            setZoom(false);
        }
    }

    const infoclass = showDetails ? "info lift" : "info";
    const cardclass = zoom ? "gamecard zoom" : "gamecard";

    return (
        <div className={cardclass} onMouseLeave={handleZoom} >
            <div className="img" style={{backgroundImage: `url(${cyberpunk})`}} onMouseEnter={(e)=>{handleZoom(e)}} ></div>
            
            <div className={infoclass} onMouseEnter={handleDetails} onMouseLeave={handleDetails}>
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