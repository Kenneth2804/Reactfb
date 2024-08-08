import React from 'react'
import swal from 'sweetalert'

export default function Alert() {
  
  const showAlert = () =>{
    swal({
        title: "¡Hola!",
        text: "Esto es una alerta de SweetAlert",
        icon: "success",
        button: "Cerrar",
    })
  }
  
    return (
    <div>
      <button onClick={showAlert}>Mosrtar Alerta</button>
    </div>
  )
}
