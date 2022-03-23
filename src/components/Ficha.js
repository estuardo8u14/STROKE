import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import logo from '../img/stoke.PNG';



export class Ficha extends Component {
  continuar = e => {
    e.preventDefault();
    this.props.sigStep();
  };

  irAbcd = e => {
    e.preventDefault();
    this.props.sigAbcd();
  };

  StrokeLogo = (
    <Typography variant="h6" component="h1" align='right' >
      <img src={logo} height="50" alt='- Ficha de Paciente' /> 
       <br></br>Ficha de Paciente
    </Typography>
  );

  titulo = () => {
    return <Toolbar>{this.StrokeLogo}</Toolbar>;
  };


  render() {
    const { valores, handleCambio } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='false'
            repositionOnUpdate={false}
            style={{ padding: '80px 0px 0px 0px' }}
          >
            <AppBar title="Detalles de Usuario" />
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Dashboard
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irAbcd}
                      >ABCD</Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irAbcd}
                      >NIHSS</Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irABCD}
                      >ASPECTS</Button>
                    </MenuItem>
                    <MenuItem >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.irABCD}
                    >DRAGON</Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irABCD}
                      >HAT</Button>
                    </MenuItem>
                    <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.irABCD}
                    >SEDAN</Button>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <header>
              <AppBar>
                {this.titulo()}
              </AppBar>
            </header>
            <TextField
              placeholder="Usuario"
              label="Nombre de la persona que registra al paciente"
              onChange={handleCambio('ultimaHora')}
              defaultValue={valores.ultimaHora}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Nombre del paciente"
              label="Nombre del paciente"
              onChange={handleCambio('nombrePaciente')}
              defaultValue={valores.nombrePaciente}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="ultimaHora"
              label="Última hora que se vio al paciente"
              onChange={handleCambio('usuarioRegistrando')}
              defaultValue={valores.usuarioRegistrando}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="entradaHora"
              label="Hora de llegada del paciente"
              onChange={handleCambio('entradaHora')}
              defaultValue={valores.entradaHora}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="edadPaciente"
              label="Edad del paciente"
              onChange={handleCambio('edadPaciente')}
              defaultValue={valores.edadPaciente}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="laborPaciente"
              label="Labor del paciente"
              onChange={handleCambio('laborPaciente')}
              defaultValue={valores.laborPaciente}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="condicionesMedicas"
              label="Condiciones médicas del paciente"
              onChange={handleCambio('condicionesMedicas')}
              defaultValue={valores.condicionesMedicas}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="txActual"
              label="Tratamiento actual del paciente"
              onChange={handleCambio('txActual')}
              defaultValue={valores.txActual}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="padecimientoActual"
              label="Padecimiento actual del paciente"
              onChange={handleCambio('padecimientoActual')}
              defaultValue={valores.padecimientoActual}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continuar}
            >continuar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Ficha;
