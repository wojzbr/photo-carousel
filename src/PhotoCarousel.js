import React, { useEffect } from 'react'
import "./photoCarousel.css"
import PolaroidPhoto from './PolaroidPhoto';

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PhotoCarousel = ({polaroidPhotos, moveLeft, moveRight}) => {
    useEffect(()=>{
        console.log(polaroidPhotos)
    },[])
    return (
        <div id="photoCarousel">
            <div className="arrow" onClick={moveLeft}><AiFillCaretLeft /></div>
            {/* <PolaroidPhoto imgSrc={polaroidPhotos[0]} imgDesc="some desc" /> */}
            {polaroidPhotos.map(polaroidPhoto => {
                return <PolaroidPhoto imgSrc={polaroidPhoto.imgSrc} imgDesc={polaroidPhoto.imgDesc} />
            })}
            <div className="arrow" onClick={moveRight}><AiFillCaretRight /></div>
        </div>
    )
}

export default PhotoCarousel;