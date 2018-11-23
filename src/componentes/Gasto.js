import React, { Component } from "react";
import PropTypes from 'prop-types';

class Gasto extends Component {
    render(){
        let {nombreGastoRef, cantidadGastoRef} = this.props.gasto;
        return(
            <li className="gastos">
                <p>
                    {nombreGastoRef}
                    <span className="gasto"> $ {cantidadGastoRef}</span>
                </p>
            </li>
        )
    }
}

Gasto.propTypes = {
    gasto : PropTypes.object.isRequired
}

export default Gasto;