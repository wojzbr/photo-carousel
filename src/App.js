import './App.css';
import PhotoCarousel from './PhotoCarousel';
import {useState, useEffect} from 'react'

function App() {
  const [polaroidPhotos, setPolaroidPhotos] = useState([]);
  const formatBreedName = (url) => {
    let unformattedBreed = url.substring(30, 30+url.substring(30).indexOf("/"));
    let breed = unformattedBreed.split("-")
    breed = (breed[1] ? breed[1] : '') + " " + breed[0];
    breed = breed.trim();
    breed = breed.charAt(0).toUpperCase() + breed.slice(1);
    return breed;
  }
  useEffect(()=>{    
    for(let i=0;i<3;i++){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [...polaroidPhotos, {imgSrc: data.message, imgDesc: formatBreedName(data.message)
        }]))
    }
  }, [])
  const moveLeft = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [ {imgSrc: data.message, imgDesc: "some description"}, polaroidPhotos[0], polaroidPhotos[1]]))
  }
  const moveRight = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [ polaroidPhotos[1], polaroidPhotos[2], {imgSrc: data.message, imgDesc: "some description"}]))
  }
  return (
    <div className="App">
      <PhotoCarousel 
        polaroidPhotos={polaroidPhotos} 
        moveLeft={moveLeft} 
        moveRight={moveRight}
      />
    </div>
  );
}

export default App;
