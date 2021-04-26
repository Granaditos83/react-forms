import React from 'react';
import './p-r-cinco.style.css';

const PrCinco = (props) => {
    return (
       <div className="p-r-cinco-container"  >
          {props.producto.marca} {   } {props.producto.color} { } {props.producto.procedencia} { } {props.producto.precio}
        


       </div>

    );



}
export default PrCinco;