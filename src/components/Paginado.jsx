import React, {useState} from 'react'
import '../styles/paginado.css';

export default function Paginado() {
    const datos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];
    const [paginaActual, setPaginaActual] = useState(1);
    const elementosPorPagina = 2;

    const indiceUltimoElemento = paginaActual * elementosPorPagina;
    const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
    const elementosActuales = datos.slice(indicePrimerElemento, indiceUltimoElemento);

    const totalPaginas = Math.ceil(datos.length / elementosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    const renderNumerosPaginas = () => {
        return [...Array(totalPaginas)].map((_, index) => (
          <span
            key={index}
            onClick={() => cambiarPagina(index + 1)}
            className={`numeroPagina ${paginaActual === index + 1 ? 'numeroPaginaActivo' : ''}`}
          >
            {index + 1}
          </span>
        ));
      };

  return (
    <div className="contenedor">
    <ul className="lista">
      {elementosActuales.map((elemento, index) => (
        <li key={index} className="item">{elemento}</li>
      ))}
    </ul>

    <div className="paginador">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          className={`boton ${paginaActual === 1 ? 'botonDeshabilitado' : ''}`}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        {renderNumerosPaginas()}
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          className={`boton ${paginaActual === totalPaginas ? 'botonDeshabilitado' : ''}`}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>


    </div>
  )
}
