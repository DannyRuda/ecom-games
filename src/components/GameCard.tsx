import "./GameCard.scss"
import cyberpunk from './../assets/examplePicture.jpg'
import LikeIcon from "../assets/svgComponents/LikeIcon"
import InfoDetails from "./sub/InfoDetails"
import MetaRating from "./sub/MetaRating"
import { useState } from "react"
import {IoIosArrowDropdown} from 'react-icons/io'
import {RiArrowDropDownLine} from 'react-icons/ri'
export default function GameCard(props: any) {

    const [showDetails,setShowDetails] = useState(false);
    const [zoom,setZoom] = useState(false);


    function handleDetails(e) {
        /*
        if(e.type === "mouseenter") {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }
        */
    }

    function handleDropdown() {
        setShowDetails(showDetails => !showDetails);
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
    const dropdownclass = showDetails ? "dropdown-icon rotate" : "dropdown-icon";

    return (
        <div className={cardclass} onMouseLeave={(e)=>{handleZoom(e)}} >
            <div className="img" style={{backgroundImage: `url(${cyberpunk})`}} onMouseEnter={(e)=>{handleZoom(e)}} ></div>
            <div className={infoclass} onMouseEnter={(e)=>{handleDetails(e)}} onMouseLeave={(e)=>{handleDetails(e)}}>
                <RiArrowDropDownLine className={dropdownclass} onClick={handleDropdown} />
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