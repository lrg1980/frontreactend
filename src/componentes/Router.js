import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Navegacion from './Navegación';
import Error from './Error';
import InfoProductos from '../datos/datos.json';
import SingleProducto from './SingleProducto';

class Router extends Component {

     state = {
          productos: []
     }

     componentWillMount() {
          this.setState({
               productos: InfoProductos
          })
     }
     
     render() { 
          return ( 
               <BrowserRouter>
                    <div className="contenedor">
                         <Header />
                         <Navegacion />
                         <Switch>
                              <Route exact path="/" render={() => (
                                   <Productos
                                        productos={this.state.productos}
                                   />
                              )} />
                              <Route exact path="/nosotros" component={Nosotros} />
                              <Route exact path="/productos" render={() => (
                                   <Productos 
                                        productos={this.state.productos}
                                   />
                              )} />
                              <Route exact path="/producto/:productoId" render={(props) => {
                                   let idProducto = props.location.pathname.replace('/producto/', '');
                                   return (
                                        <SingleProducto
                                        producto={this.state.productos[idProducto]}
                                        />
                                        )
                                        
                                   }
                              } />
                              <Route exact path="/contacto" component={Contacto} />
                              <Route component={Error} />
                              </Switch>
                    </div>
               </BrowserRouter>
           );
     }
}
 
export default Router;
