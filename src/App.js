import './styles/App.css';
import PhotoCarousel from './PhotoCarousel';
import PolaroidPhoto from './PolaroidPhoto';
import SelectBreed from './BreedSelector';
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
  
  useEffect(()=>{
    for(let i=0;i<10;i++){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setPolaroidPhotos(polaroidPhotos => [...polaroidPhotos, <PolaroidPhoto imgSrc={data.message} imgDesc={formatBreedName(data.message)} />
        ]))
    }
  }, [])

  return (
    <div className="App">
      <SelectBreed 
        setPolaroidPhotos={setPolaroidPhotos}
        formatBreedName={formatBreedName}
      />
      <PhotoCarousel 
        polaroidPhotos={polaroidPhotos}
      />
      <a target="_blank" href="https://icons8.com/icon/9201/dog-paw" rel="noreferrer">Dog Paw</a> icon by 
      <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
    </div>
  );
}

export default App;
