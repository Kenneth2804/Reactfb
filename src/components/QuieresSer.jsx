import React, {useState} from 'react'
import "../styles/style.css"

export default function QuieresSer() {

 const [noButtonStyle, setNoButtonStyle] = useState({
        position: 'absolute',
        top: '50%',
        left: '50%',
      });

const moveButton = () => {
     const top = Math.floor(Math.random() * 90) + '%';
     const left = Math.floor(Math.random() * 90) + '%';
setNoButtonStyle({ top, left });
 };

 const [modalIsOpen, setModalIsOpen] = useState(false);

 const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
    <div className='App'>
       <h1>¿Quieres ser mi novia?</h1>

<button className="yes-button" onClick={openModal}>Sí</button>

<button 
    className="no-button" 
    style={noButtonStyle} 
    onMouseEnter={moveButton}
>
        No
</button>
{
 modalIsOpen && (
    <div className="modal">
  <div className="modal-content">
  <span className="close-button" onClick={closeModal}>&times;</span>
     <h2>Sabía que dirías que sí</h2>
  <img 
  src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif" 
  alt="Corazones"
  />
    </div>
    </div>
  )   
}
    </div>
  )
}
