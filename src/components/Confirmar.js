import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export class Confirmar extends Component {
  continuar = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.sigStep();
  };

  atrás = e => {
    e.preventDefault();
    this.props.anteStep();
  };

  StrokeLogo = (
    <Typography variant="h6" component="h1">
      STROKE - Confirmar Datos
    </Typography>
  );

  titulo = () => {
    return <Toolbar>{this.StrokeLogo}</Toolbar>;
  };

  render() {
    const {
      valores: { usuarioRegistrando, nombrePaciente, ultimaHora, entradaHora, edadPaciente, laborPaciente, condicionesMedicas, txActual, padecimientoActual, presionArterial, glucometro, comentarios }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            repositionOnUpdate={false}
            style={{ padding: '60px 0px 0px 0px' }}
          >
            <AppBar title="Confirmar User Data" />
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Dashboard
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>ABCD</MenuItem>
                    <MenuItem onClick={popupState.close}>NIHSS</MenuItem>
                    <MenuItem onClick={popupState.close}>ASPECTS</MenuItem>
                    <MenuItem onClick={popupState.close}>DRAGON</MenuItem>
                    <MenuItem onClick={popupState.close}>HAT</MenuItem>
                    <MenuItem onClick={popupState.close}>SEDAN</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <header>
              <AppBar>{this.titulo()}</AppBar>
            </header>
            <List>
              <ListItem>
                <ListItemText primary="Registrador" secondary={usuarioRegistrando} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nombre paciente" secondary={nombrePaciente} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Última hora visto" secondary={ultimaHora} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hora de llegada" secondary={entradaHora} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Edad paciente" secondary={edadPaciente} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Labor paciente" secondary={laborPaciente} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Condiciones médicas" secondary={condicionesMedicas} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tratamiento actual" secondary={txActual} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Padecimiento actual" secondary={padecimientoActual} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Presión arterial" secondary={presionArterial} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Glucómetro" secondary={glucometro} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Comentarios" secondary={comentarios} />
              </ListItem>
            </List>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.atrás}
            >atrás</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continuar}
            >Confirmar & continuar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirmar;
