import React, {useState} from 'react'
import "../styles/toggle.css"
import Modal from './Modal';
import Dropdown from './Dropdown';
import RadioButtonGroup from './RadioButtonGroup';

export default function Toggle() {
 const [ isOn, setIsOn] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const toggle =() =>{
  setIsOn(!isOn);
 }

 const openModal =()=>{
  setIsModalOpen(true)
 }
 const closeModal =()=>{
  setIsModalOpen(false)
 }

 const handleSelect = (option) => {
  console.log('Selected:', option);
};


  return (
    <div className='toggle-container'>
      <button onClick={openModal} className='open-modal-button'>
        ABRIR MODAL
      </button>

<Modal isOpen={isModalOpen} onClose={closeModal}>
  <h1>ESTO ES UN MODAL</h1>  

  <button onClick={toggle} className={isOn ? 'on': 'off'}>
      {isOn ? 'Encencido' : 'Apagado'}
    </button>      
    
<h1>ESTO ES DROPDOWN</h1>
<Dropdown
 options={['Option 1', 'Option 2', 'Option 3']}
 onSelect={handleSelect} >

 </Dropdown>


</Modal>
  
  
    </div>
  )
}
