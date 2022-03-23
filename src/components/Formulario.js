import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import Ficha from './Ficha';
import FormPersonalDetails from './SignosVitales';
import Confirmar from './Confirmar';
import Exito from './Exito';
import ABCD from './ABCD.js';



export class Formulario extends Component {
  state = {
    step: 1,
    usuarioRegistrando: '',
    nombrePaciente:'',
    ultimaHora: '',
    entradaHora: '',
    edadPaciente: '',
    laborPaciente: '',
    condicionesMedicas: '',
    txActual:'',
    padecimientoActual:'',
    presionArterial:'',
    glucometro:'',
    comentarios:''
  };

  newForm = () => {
    const { step } = this.state;
    this.setState({
      step: step - step + 1,
      usuarioRegistrando: '',
      nombrePaciente:'',
      ultimaHora: '',
      entradaHora: '',
      edadPaciente: '',
      laborPaciente: '',
      condicionesMedicas: '',
      txActual:'',
      padecimientoActual:'',
      presionArterial:'',
      glucometro:'',
      comentarios:''
    });
  };

  sigAbcd = () => {
    const { step } = this.state;
    this.setState({
      step: step - step + 5
    });
  };

  // Proceed to next step
  sigStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go atrás to prev step
  anteStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleCambio = input => e => {
    this.setState({ [input]: e.target.value });
  };

  StrokeLogo = (
    <Typography variant="h6" component="h1">
      STROKE
    </Typography>
  );

  titulo = () => {
    return <Toolbar>{this.StrokeLogo}</Toolbar>;
  };


  render() {
    const { step } = this.state;
    const { usuarioRegistrando, nombrePaciente, ultimaHora, entradaHora, edadPaciente, laborPaciente, condicionesMedicas, txActual, padecimientoActual, presionArterial, glucometro, comentarios } = this.state;
    const valores = { usuarioRegistrando, nombrePaciente, ultimaHora, entradaHora, edadPaciente, laborPaciente, condicionesMedicas, txActual, padecimientoActual, presionArterial, glucometro, comentarios };

    <header>
      <AppBar>{this.titulo()}</AppBar>
    </header>

    switch (step) {
      case 1:
        return (
          <Ficha
            sigStep={this.sigStep}
            handleCambio={this.handleCambio}
            valores={valores}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            sigStep={this.sigStep}
            anteStep={this.anteStep}
            handleCambio={this.handleCambio}
            valores={valores}
          />
        );
      case 3:
        return (
          <Confirmar
            sigStep={this.sigStep}
            anteStep={this.anteStep}
            valores={valores}
          />
        );
      case 4:
        return (
        <Exito 
          newForm={this.newForm}                 
        />
        );
      case 5:
        return (
          <ABCD 
            handleCambio={this.handleCambio}
            goABCD={this.goABCD}          
          />
        );
      default:
        (console.log('Este es un formulario STOKE de varios pasos creado en React.'))
    }
  }
}

export default Formulario;
