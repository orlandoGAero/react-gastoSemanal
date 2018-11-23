import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {

  //crear state
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  //componente delciclo d vida
  componentDidMount() {
    this.obtenerPresupuesto();
  }
  
  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cuanto es el presupuesto?');
    
    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
        this.setState({
          presupuesto,
          restante : presupuesto 
        })
    } else {
      this.obtenerPresupuesto();
    }

  }

  agregarGasto = gasto => {
    //copiar state
    const gastos = {...this.state.gastos}
  
    //agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    
    //llamar funcion restar
    this.restarPresupuesto(gasto.cantidadGastoRef);

    //agregarlo en state
    this.setState({
      gastos
    })
  }
  
  restarPresupuesto = cantidad => {

    //convertir a tipo number ya que es string
    let restar = Number(cantidad);

    //copiar state de restante
    let restante = this.state.restante;
  
    //restar al restante
    restante -= restar;

    restante = String(restante);

    //agregar al state
    this.setState({
      restante
    })

  }

  render() {
    return (
      <div className="App container">
        < Header
          titulo='Gasto Semanal'
        />

        <div className="contenido-principal contenido">
          <div className="row">

            <div className="one-half column">
              < Formulario 
                agregarGasto = {this.agregarGasto}
              />
            </div>

            <div className="one-half column">
              < Listado
                gastos= {this.state.gastos}
              />
              < ControlPresupuesto 
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
