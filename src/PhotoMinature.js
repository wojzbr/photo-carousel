import './styles/photoMinature.css'

const PhotoMinature = ({imgSrc, onClick}) => {
    return (
        <div className="photoMinature" onClick={onClick}>
            <img src={imgSrc} alt="minature" />
        </div>
    )
}

export default PhotoMinature;