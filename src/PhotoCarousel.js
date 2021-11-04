import React from 'react'
import "./photoCarousel.css"
import PolaroidPhoto from './PolaroidPhoto';

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PhotoCarousel = ({polaroidPhotos}) => {
    return (
        <div id="photoCarousel">
            <div className="arrow"><AiFillCaretLeft /></div>
            {polaroidPhotos.map(polaroidPhoto => {
                return <PolaroidPhoto imgSrc={polaroidPhoto.imgSrc} imgDesc={polaroidPhoto.imgDesc} />
            })}
            <div className="arrow"><AiFillCaretRight /></div>
        </div>
    )
}

export default PhotoCarousel;