import React, {useState} from 'react'
import '../styles/radio.css'

export default function RadioButtonGroup() {

const [selectedOption, setSelectedOption] = useState('');


const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-button-group">
         <h3>Elige una opción:</h3>

<label className='radio-label'>
    <input
     type="radio"
     value="option1"
     checked={selectedOption === 'option1'}
     onChange={handleOptionChange}
     className="radio-input"
     
    />
    Opción 1
</label>   
<label className='radio-label'>
    <input
     type="radio"
     value="option2"
     checked={selectedOption === 'option2'}
     onChange={handleOptionChange}
     className="radio-input"
     
    />
    Opción 2
</label>    
<label className='radio-label'>
    <input
     type="radio"
     value="option3"
     checked={selectedOption === 'option3'}
     onChange={handleOptionChange}
     className="radio-input"
     
    />
    Opción 3
</label>    
<div className='selected-option'>
    opcion seleccionada:
    {selectedOption}
    </div>   
    </div>
  )
}
