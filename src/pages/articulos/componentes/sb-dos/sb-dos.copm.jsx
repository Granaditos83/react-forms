import React from 'react';
import PtTres from '../p-t-tres/p-t-tres.copm';
import './sb-dos.style.css';

const SbDos = () => {
    return (
        <div className="sb-dos-container">

            <form>
                <table>
                    <tr>
                    
                    <td>Marcos bicicletas</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                    
                    <td>Accesorios para tu bicicleta</td>
                        <td><input type="text"/></td>
                    </tr>
                   
                    <tr>
                        <td>Vestimenta deportiva</td>
                        <td><input type="text"/></td>
                    </tr>
                    <button>Adicionar  producto</button>

                        
                        
                    
                </table>
                <select>
                    <option value="Marcos bicicletas">Marcos bicicletas</option>
                    <option value="Accesorios para tu bicicleta">Accesorios para tu bicicleta</option>
                    <option value="Marcos bicicletas">Vestimenta deportiva</option>
                </select>
            </form>

            <h1>R🚲DAND🚲.com  ®  </h1>

            <PtTres/>
            
            
            
        </div>


    );



}
export default SbDos  ;