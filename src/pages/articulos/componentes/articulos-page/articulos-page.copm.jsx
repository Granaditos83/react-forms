import React from 'react';
import fptableUno from '../fpt-uno/fpt-uno.copm';




const PrimeraCosa = () => {

    

    let listaDeProductos ={
        categorias:[
            {
                nombre:'Marcos bicicletas',
                productos:[
                    {
                        marca:"Giant",
                        color:"rojo",
                        procedencia:"usa",
                        precio: "1.200.000",
                        stock: 1,
                    },
                    {
                        marca:"specialized rockhopper",
                        color:"Azul",
                        procedencia:"USA",
                        precio: "10.300,000",
                        stock: 0,
                    },
                    {
                        marca:"Arbar",
                        color:"Verde",
                        procedencia:"colombia",
                        precio: "1.100.000",
                        stock: 5,
                    },
                    {
                        marca:"Ciclo paez",
                        color:"Verde",
                        procedencia:"colombia",
                        precio: "700.00",
                        stock: 0,
                    },
                    {
                        marca:"Garry Tunner",
                        color:"Verde",
                        procedencia:"España",
                        precio: "11.000.000",
                        stock: 9,
                    },
                ]
            },
            {
                nombre:'Accesorios para tu bicicleta',
                productos:[
                    {
                        marca:"Shimano    ",
                        color:"sss",
                        procedencia:"Alemania",
                        precio: "500.00",
                        stock: 0,
                    },
                    {
                        marca:"Mongus",
                        color:"Negro",
                        procedencia:"Canada",
                        precio: "900.000",
                        stock: 3,
                    },
                    {
                        marca:"Fox racing ",
                        color:"Amarrilo",
                        procedencia:"USA",
                        precio: "700.000",
                        stock: 5,
                    },
                    {
                        marca:"Bell",
                        color:"Negro",
                        procedencia:"Alemania",
                        precio: "999.000",
                        stock: 2,
                    },
                    {
                        marca:"Benelli    ",
                        color:"Sin color",
                        procedencia:"Alemania",
                        precio: "12.000.000",
                        stock: 2,
                    },
                    {
                        marca:"Fox Racing",
                        color:"Gris",
                        procedencia:"USA",
                        precio: "720.000",
                        stock: 10,
                    },
                    {
                        marca:"Benelli",
                        color:"Morado",
                        procedencia:"Alemania",
                        precio: "560.000",
                        stock: 2,
                    }

                ]
            },
            {
                nombre:'Vestimenta deportiva',
                productos:[
                    {
                        marca:"Rigo GO",
                        color:"Verde y blanco",
                        procedencia:"Colombia",
                        precio: "120.000",
                        stock: 10,
                    },
                    {
                        marca:"Velez",
                        color:"Blanco Logo Rigo go",
                        procedencia:"Colombia",
                        precio: "350.000",
                        stock: 10,
                    },
                    {
                        marca:"Rigo GO",
                        color:"Verde y blanco",
                        procedencia:"Colombia",
                        precio: "120.000",
                        stock: 10,
                    },
                    {
                        marca:"Rigo GO",
                        color:"Verde y blanco",
                        procedencia:"Colombia",
                        precio: "120.000",
                        stock: 10,
                    },
                    {
                        marca:"Rigo GO",
                        color:"Verde y blanco",
                        procedencia:"Colombia",
                        precio: "120.000",
                        stock: 10,
                    },
                    {
                        marca:"Rigo GO",
                        color:"Verde y blanco",
                        procedencia:"Colombia",
                        precio: "120.000",
                        stock: 10,
                    }
                ]
            }
        ]
    };
    

    return (
        <>
           <fptableUno listaDeProductos={listaDeProductos}/>



        <div>
          



        </div>
        
        </>
     

      
        
    
      


    );



}
export default PrimeraCosa  ;