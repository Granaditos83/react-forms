import React from 'react';
import PcCuatroRow from '../p-c-cuatro-row/p-c-cuatro-row.copm';
import PcCuatro from '../p-c-cuatro-row/p-c-cuatro-row.copm';
import PrCinco from '../p-r-cinco/p-r-cinco.copm';
import './p-t-tres.style.css';


const PtTres = () => {
    return (
        <div className="p-t-tres-container">
            
            <PcCuatroRow categoriaMarca= "Marcos"   />
            MARCA....COLOR...PROCEDENCIA...PRECIO
            <PrCinco producto ={{
                marca:"Giant",
                color:"rojo",
                procedencia:"usa",
                precio: "1.200.000"

            }} />
            
            
            <PcCuatroRow categoriaMarca= "Accesorios"   />
            <PcCuatroRow categoriaMarca= "Vestimenta"   />

            
        
            
        </div>


    );



}
export default PtTres  ;