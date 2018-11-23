import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper'
import PropTypes from 'prop-types';

class Restante extends Component {
    render(){
        let presupuesto = this.props.presupuesto;
        let restante = this.props.restante;

        return(
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: {this.props.restante}
            </div>
        )
    }
}

Restante.propTypes = {
    presupuesto : PropTypes.string.isRequired,
    restante : PropTypes.string.isRequired
}
export default Restante;