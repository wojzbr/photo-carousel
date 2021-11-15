import React from 'react'
import './styles/polaroidPhoto.css'

const PolaroidPhoto = ({imgSrc, imgDesc}) => {
    return(
        <div className="polaroidFrame">
            <div className="polaroidPhoto">
                <img alt="" src={`${imgSrc}`}></img>
            </div>
            <div className="polaroidDescription">{imgDesc}</div>
        </div>
    )
}

export default PolaroidPhoto