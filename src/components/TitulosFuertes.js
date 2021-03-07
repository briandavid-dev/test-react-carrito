import React from 'react';
import '../styles/css/globales.css';

const TitulosFuertes = props => {

    const { cantidadCarrito } = props;

    return (
        <div className="los_titulotes">
            Carrito: {cantidadCarrito}
        </div>
    )
}

export default TitulosFuertes;
