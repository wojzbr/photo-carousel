import './styles/App.css';
import PhotoCarousel from './PhotoCarousel';
import PolaroidPhoto from './PolaroidPhoto';
import PhotoMinature from './PhotoMinature';
import SelectBreed from './BreedSelector';
import Navbar from './navbar/Navbar'
import {useState, useEffect} from 'react'

const formatBreedName = (url) => {
  let unformattedBreed = url.substring(30, 30+url.substring(30).indexOf("/"));
  let breed = unformattedBreed.split("-")
  breed = (breed[1] ? breed[1] : '') + " " + breed[0];
  breed = breed.trim();
  breed = breed.charAt(0).toUpperCase() + breed.slice(1);
  return breed;
}

function App() {

  const [polaroidPhotos, setPolaroidPhotos] = useState([])
  const [photoMinatures, setPhotoMinatures] = useState([])
  const [bound, setBound] = useState(0)

  const slide = (direction) => {
    direction==="left"?
        polaroidPhotos.unshift(polaroidPhotos.pop()):
        polaroidPhotos.push(polaroidPhotos.shift());
  }

  useEffect(()=>{
    for(let i=0;i<10;i++){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setPolaroidPhotos(polaroidPhotos => [...polaroidPhotos, <PolaroidPhoto imgSrc={data.message} imgDesc={formatBreedName(data.message)} />])
            setPhotoMinatures(photoMinatures => [...photoMinatures, <PhotoMinature imgSrc={data.message} />])
      })
    }
    document.getElementById("breeds").addEventListener("change",()=>{
      setPolaroidPhotos([])
      setPhotoMinatures([])
      let url;
      (document.getElementById("breeds").value === "all breeds")?
        url='https://dog.ceo/api/breeds/image/random':
        url=`https://dog.ceo/api/breed/${document.getElementById("breeds").value}/images/random`;
      for(let i=0;i<10;i++){
        fetch(url)
          .then(response => response.json())
          .then(data => {
              setPolaroidPhotos(polaroidPhotos => [...polaroidPhotos, <PolaroidPhoto imgSrc={data.message} imgDesc={formatBreedName(data.message)} />])
              setPhotoMinatures(photoMinatures => [...photoMinatures, <PhotoMinature imgSrc={data.message} />])
        })
      }
      document.getElementById("buttonsWrapper").style.right="-70vw"
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      
      <PhotoCarousel 
        polaroidPhotos={polaroidPhotos}
        photoMinatures={photoMinatures}
        bound={bound}
        setBound={setBound}
        slide={slide}
      />
      <div id="clause">
        <a target="_blank" href="https://icons8.com/icon/9201/dog-paw" rel="noreferrer">Dog Paw</a> favicon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
      </div>
    </div>
  );
}

export default App;
