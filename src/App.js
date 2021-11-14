import './App.css';
import PhotoCarousel from './PhotoCarousel';
import {useState, useEffect} from 'react'

function App() {
  const [polaroidPhotos, setPolaroidPhotos] = useState([]);
  // async function fetchPhoto() {
  //   const response = await fetch('https://dog.ceo/api/breeds/image/random');
  //   const photo = await response.json();
  //   const photoSrc = await photo.message;
  //   return photoSrc
  // }
  useEffect(()=>{    
    for(let i=0;i<3;i++){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [...polaroidPhotos, data.message]))
    }
  }, [])
  const moveLeft = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [ data.message, polaroidPhotos[0], polaroidPhotos[1]]))
  }
  const moveRight = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [ polaroidPhotos[1], polaroidPhotos[2], data.message]))
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
