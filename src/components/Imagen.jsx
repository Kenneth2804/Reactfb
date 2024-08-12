import React, {useState} from 'react'
import '../styles/ImageGallery.css';

const images = [
  'https://via.placeholder.com/600x400?text=Imagen+1',
  'https://via.placeholder.com/600x400?text=Imagen+2',
  'https://via.placeholder.com/600x400?text=Imagen+3',
  'https://via.placeholder.com/600x400?text=Imagen+4',
];

export default function Imagen() {

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery">
    <div className="main-image">
      <img src={selectedImage} alt="Selected" />
    </div>
    <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={selectedImage === image ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  )
}
