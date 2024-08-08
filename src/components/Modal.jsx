import React from 'react'
import "../styles/modal.css"

export default function Modal({isOpen, onClose, children}) {
 
    if(!isOpen) return null;
 
    return (
    <div className='modal-overlay'>
        <div className='modal-content'>
    <button className='close-button' onClick={onClose}>
        &times;
    </button>
        {children}
        </div>
      


    </div>
  )
}
