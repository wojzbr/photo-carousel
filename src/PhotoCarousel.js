import React, { useEffect } from 'react'
import "./styles/photoCarousel.css"

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PhotoCarousel = ({polaroidPhotos, photoMinatures, bound, setBound, slide}) => {
    
    return (
        <div id="photoCarousel">

            <div className="arrowWrapper left" onClick={()=>{
                bound===0?setBound(9):setBound((bound-1)%polaroidPhotos.length)
                slide("left");
            }}>
                <div className="arrow"><AiFillCaretLeft /></div>
            </div>
            
            <div id="allPhotosWrapper">
                <div id="photoContainer">
                    {polaroidPhotos.map(photo=>photo)}
                </div>
                <div id="photoMinatures">
                    {photoMinatures.map(minature=>minature)}
                </div>
            </div>

            <div className="arrowWrapper right" onClick={()=>{
                setBound((bound+1)%polaroidPhotos.length)
                slide("right");
            }}>
                <div className="arrow"><AiFillCaretRight /></div>
            </div>

        </div>
    )
}

export default PhotoCarousel;