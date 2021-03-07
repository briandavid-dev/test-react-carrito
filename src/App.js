import React, { useState } from 'react';
import TitulosFuertes from './components/TitulosFuertes';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Producto from '../src/components/Producto';
import Carrito from './components/Carrito';

function App() {

  let titulo = "Web de carrito de compras";

  const fecha = new Date().getFullYear();

  const [productos, setProductos] = useState([
      {id: 1, nombre: 'Camiza', talla: 'M'},
      {id: 2, nombre: 'Pantalon', talla: 'XL'},
      {id: 3, nombre: 'Gorra', talla: 'S'},
      {id: 4, nombre: 'Bicicleta', talla: 'L'},
      {id: 5, nombre: 'Pulsera', talla: 'S'},
  ]);

  const [carrito, setCarrito] = useState([]);


  return (
    <>
      <Header 
          titulo={titulo+' '+fecha}
      />


      <TitulosFuertes
          cantidadCarrito={carrito.length}
      />

      <Carrito 
          carrito={carrito}
          setCarrito={setCarrito}
      />

      <h2>Lista de productos</h2>
      Total: {productos.length}
      {productos.map((producto, key) => 
        <Producto
            key={producto.id+key}
            producto={producto}
            carrito={carrito}
            productos={productos}
            setCarrito={setCarrito}
        />
      )}

      <Footer 
          anio={fecha}
      />
    </>
  );
}

export default App;
