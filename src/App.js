import './App.css';
import PhotoCarousel from './PhotoCarousel';

const polaroidPhotos = [
  {imgSrc: "/images/jpgtest.jpg", imgDesc: "Description 1"},
  {imgSrc: "/images/jpgtest.jpg", imgDesc: "Description 2"},
  {imgSrc: "/images/jpgtest.jpg", imgDesc: "Description 3"},
]

function App() {
  return (
    <div className="App">
      <PhotoCarousel polaroidPhotos={polaroidPhotos}/>
    </div>
  );
}

export default App;
