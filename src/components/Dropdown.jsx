import React, {useState} from 'react'
import "../styles/drop.css"

export default function Dropdown({options, onSelect}) {
  
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState(null);

const toggleDropdown = () => setIsOpen(!isOpen);
  
const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

    return (
    <div className='dropdown'>
 <button onClick={toggleDropdown} className="dropdown-toggle">
 {selectedOption || 'Select an option'}
  </button>

  {isOpen && (
 <ul className="dropdown-menu">
    {options.map((option, index) => (
 <li key={index} onClick={() => handleOptionClick(option)}>
        {option}
 </li>
          ))}
        </ul>
      )}


    </div>
  )
}
