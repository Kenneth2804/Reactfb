import React, {useState} from 'react'

export default function CambioTema() {

const [temaOscuro, setTemaOscuro] = useState(false);

const cambiarTema = () =>{
    setTemaOscuro(!temaOscuro);
}

    return (
    <div
    style={{
        textAlign: 'center', 
        marginTop: '50px',
        backgroundColor: temaOscuro ? '#333' : '#fff',
        color: temaOscuro ? '#fff' : '#000',
        height: '100vh'
      }}
    
    >

    <h1>Tema {temaOscuro ? 'Oscuro' : 'Claro'}</h1>

    <button onClick={cambiarTema}>
        Cambiar a {temaOscuro ? 'Claro' : 'Oscuro'}
      </button>
      
    </div>
  )
}
