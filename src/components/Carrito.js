import React from 'react';
import Producto from './Producto';
import '../styles/css/carrito/carrito.css';

const Carrito = props => {

    const { carrito, setCarrito } = props;

    return (
        <div className="carrito_panel">
        
            <h3>Mi Carrito</h3>

            {carrito.map((producto, key) => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}
                />
            ))}
            
        </div>
    )
}

export default Carrito;
