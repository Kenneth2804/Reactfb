import React,{useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function MostrarOcultarPassword() {

    const [password, setPassword] = useState('');
    const [mostrar, setMostrar] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>

      <input 
          type={mostrar ? 'text' : 'password'} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Contraseña" 
          style={{ paddingRight: '30px' }}
        />
       
       <span 
          onClick={() => setMostrar(!mostrar)} 
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
        >
          {mostrar ? <FaEyeSlash /> : <FaEye />}
        </span>
       
        </div>
      
    </div>
  )
}
