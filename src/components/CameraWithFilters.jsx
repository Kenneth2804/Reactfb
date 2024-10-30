import React, {useState, useRef} from 'react'
import Webcam from 'react-webcam';
import '../styles/filter.css';

export default function CameraWithFilters() {

    const [photo, setPhoto] = useState(null);
    const [filter, setFilter] = useState('');
    const webcamRef = useRef(null);
  
    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPhoto(imageSrc);
      };

      const applyFilter = (filterType) => {
        setFilter(filterType);
      };

  return (
    <div className="container">
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        height="100%"
      />
      <button onClick={capture}>Take Photo</button>
    </div>
    <div className="filters">
        <button onClick={() => applyFilter('none')}>No Filter</button>
        <button onClick={() => applyFilter('sepia')}>Sepia</button>
        <button onClick={() => applyFilter('grayscale')}>Grayscale</button>
      </div>
      {photo && (
        <div className="photo-container">
          <img
            src={photo}
            alt="Captured"
            className={`photo ${filter}`}
          />
        </div>
      )}
    </div>
  )
}
