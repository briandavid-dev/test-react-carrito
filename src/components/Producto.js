import React from 'react'

const Producto = props => {

    const { producto: {nombre, talla, id}, productos, setCarrito, carrito } = props;

    const seleccionarProducto = id => {
        const producto = productos.find(producto => producto.id == id)
        setCarrito([
            ...carrito,
            producto
        ])
    }

    const eliminarProducto = id => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
    }

    return (
        <p  >
            {productos ? 
            (
                <button
                    type="button"
                    onClick={() => seleccionarProducto(id) }
                >
                    Agregar
                </button>
            ) :
            (
                <button
                    type="button"
                    onClick={() => eliminarProducto(id) }
                >
                    Eliminar
                </button>
            )
            }


            {''} {nombre}. Talla: {talla} 
        </p>
    )
}

export default Producto;
   