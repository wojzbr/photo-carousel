import React, { useState } from 'react'
import "./photoCarousel.css"

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PhotoCarousel = ({polaroidPhotos}) => {

    const [bound, setBound] = useState(0)

    return (
        <div id="photoCarousel">
            <div className="arrow" onClick={()=>{
                bound===0?setBound(9):setBound((bound-1)%polaroidPhotos.length)
                console.log(bound)
            }}><AiFillCaretLeft /></div>
                {polaroidPhotos[bound%polaroidPhotos.length]}
                {polaroidPhotos[(bound+1)%polaroidPhotos.length]}
                {polaroidPhotos[(bound+2)%polaroidPhotos.length]}
            <div className="arrow" onClick={()=>{
                setBound((bound+1)%polaroidPhotos.length)
                console.log(bound)
            }}><AiFillCaretRight /></div>
        </div>
    )
}

export default PhotoCarousel;