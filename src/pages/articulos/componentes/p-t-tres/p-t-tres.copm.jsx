import React from 'react';
import PcCuatroRow from '../p-c-cuatro-row/p-c-cuatro-row.copm';
import PrCinco from '../p-r-cinco/p-r-cinco.copm';
import './p-t-tres.style.css';


const PtTres = () => {

    
    return (
        <div className="p-t-tres-container">



           
            
            <PcCuatroRow categoriaMarca= "Marcos bicicletas"   />
            <p>MARCA....COLOR...PROCEDENCIA...PRECIO...STOCK</p>
            <PrCinco producto ={{
                marca:"Giant",
                color:"rojo",
                procedencia:"usa",
                precio: "1.200.000",
                stock: 1,

            }} />
              <PrCinco producto ={{
                marca:"specialized rockhopper",
                color:"Azul",
                procedencia:"USA",
                precio: "10.300,000",
                stock: 0,

            }} />
              <PrCinco producto ={{
                marca:"Arbar",
                color:"Verde",
                procedencia:"colombia",
                precio: "1.100.000",
                stock: 5,

            }} />
               <PrCinco producto ={{
                marca:"Ciclo paez",
                color:"Verde",
                procedencia:"colombia",
                precio: "700.00",
                stock: 0,

            }} />
               <PrCinco producto ={{
                marca:"Garry Tunner",
                color:"Verde",
                procedencia:"España",
                precio: "11.000.000",
                stock: 9,

            }} />
            
            
            <PcCuatroRow categoriaMarca= "Accesorios para tu bicicleta"   />
            <p>MARCA....COLOR...PROCEDENCIA...PRECIO...STOCK</p>
            <PrCinco producto ={{
                marca:"Shimano    ",
                color:"Cyan",
                procedencia:"Alemania",
                precio: "500.00",
                stock: 0,

            }} />
               <PrCinco producto ={{
                marca:"Mongus",
                color:"Negro",
                procedencia:"Canada",
                precio: "900.000",
                stock: 3,

            }} />
               <PrCinco producto ={{
                marca:"Fox racing ",
                color:"Amarrilo",
                procedencia:"USA",
                precio: "700.000",
                stock: 5,

            }} />
             <PrCinco producto ={{
                marca:"Bell",
                color:"Negro",
                procedencia:"Alemania",
                precio: "999.000",
                stock: 2,

            }} />
             <PrCinco producto ={{
                marca:"Benelli    ",
                color:"Sin color",
                procedencia:"Alemania",
                precio: "12.000.000",
                stock: 2,

            }} />
             <PrCinco producto ={{
                marca:"Fox Racing",
                color:"Gris",
                procedencia:"USA",
                precio: "720.000",
                stock: 10,

            }} />
             <PrCinco producto ={{
                marca:"Benelli",
                color:"Morado",
                procedencia:"Alemania",
                precio: "560.000",
                stock: 2,

            }} />
            
            



          
            <PcCuatroRow categoriaMarca= "Vestimenta deportiva"   />
            <p>MARCA....COLOR...PROCEDENCIA...PRECIO...STOCK</p>
            <PrCinco producto ={{
                marca:"Rigo GO",
                color:"Verde y blanco",
                procedencia:"Colombia",
                precio: "120.000",
                stock: 10,

            }} />
                <PrCinco producto ={{
                marca:"Velez",
                color:"Blanco Logo Rigo go",
                procedencia:"Colombia",
                precio: "350.000",
                stock: 10,

            }} />
                <PrCinco producto ={{
                marca:"Rigo GO",
                color:"Verde y blanco",
                procedencia:"Colombia",
                precio: "120.000",
                stock: 10,

            }} />
                  <PrCinco producto ={{
                marca:"Rigo GO",
                color:"Verde y blanco",
                procedencia:"Colombia",
                precio: "120.000",
                stock: 10,

            }} />
                  <PrCinco producto ={{
                marca:"Rigo GO",
                color:"Verde y blanco",
                procedencia:"Colombia",
                precio: "120.000",
                stock: 10,

            }} />
                  <PrCinco producto ={{
                marca:"Rigo GO",
                color:"Verde y blanco",
                procedencia:"Colombia",
                precio: "120.000",
                stock: 10,

            }} />


            
            

            
        
            
        </div>
        


    );



}
export default PtTres  ;