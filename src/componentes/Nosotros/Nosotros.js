import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
     state = {  }
     render() { 
          return ( 
               <div className="contenedor-nosotros">
                    <div className="imagen">
                         <img src="/img/camisa_1.png" alt="imagen nosotros" />
                    </div>
                    <div className="contenido">
                         <h2>Sobre Nosotros</h2>
                         <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor(N.del T.persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60 s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. </p>
                    </div>
               </div>
           );
     }
}
 
export default Nosotros;

