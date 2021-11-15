import React, { useState } from 'react'
import "./styles/photoCarousel.css"

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PhotoCarousel = ({polaroidPhotos}) => {

    const [bound, setBound] = useState(0)

    const slide = (direction) => {
        direction==="left"?
            polaroidPhotos.push(polaroidPhotos.shift()):
            polaroidPhotos.unshift(polaroidPhotos.pop());
    }

    return (
        <div id="photoCarousel">

            <div className="arrowWrapper left" onClick={()=>{
                bound===0?setBound(9):setBound((bound-1)%polaroidPhotos.length)
                slide("left");
            }}>
                <div className="arrow"><AiFillCaretLeft /></div>
            </div>

            <div id="photoContainer">
                {/* {polaroidPhotos[(bound)%polaroidPhotos.length]}
                {polaroidPhotos[(bound+1)%polaroidPhotos.length]}
                {polaroidPhotos[(bound+2)%polaroidPhotos.length]} */}
                {polaroidPhotos.map(photo=>photo)}
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