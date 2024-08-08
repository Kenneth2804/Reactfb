import React, {useState} from 'react'

export default function Contador() {
 
 const [contador, setContador] = useState(0);
 
    return (
    <div>
      <p>contador en {contador}</p>
      <button onClick={()=> setContador(contador+1)}>SUMALEE</button>
    </div>
  )
}
