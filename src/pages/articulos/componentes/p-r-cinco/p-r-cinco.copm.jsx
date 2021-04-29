import React from 'react';
import './p-r-cinco.style.css';

const PrCinco = (props) => {
    return (
      
        

      


       
      <div className="p-r-cinco-container"  >

{props.producto.marca} { } {props.producto.color} { } {props.producto.procedencia} { } {props.producto.precio} { }
      
      {
          props.producto.stock ===0
          ?
          <span className="producto-sin-existencia">{props.producto.stock} { }🔴{  } producto no disponible 😰  </span>
          :
          <span>{props.producto.stock} { }🟢 Producto disponible 🙂 </span>
      }

         
 




        

       </div>

    );



}
export default PrCinco;