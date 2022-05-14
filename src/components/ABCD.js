import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export class ABCD extends Component {
  continuar = e => {
    e.preventDefault();
    this.props.sigStep();
  };
  nuevaFicha = e => {
    // nuevo formulario //
    this.props.newForm();
  };
  irABCD = e => {
    e.preventDefault();
    this.props.sigAbcd();
  };

  StrokeLogo = (
    <Typography variant="h6" component="h1">
      STROKE - ABCD
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
            maxWidth='sm'
          >
            <AppBar title="ABCD" />
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
                              onClick={this.nuevaFicha}
                          >Nueva Ficha</Button>
                      </MenuItem>
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
                          onClick={this.irAbcd}
                        >ASPECTS</Button>
                      </MenuItem>
                      <MenuItem >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irAbcd}
                      >DRAGON</Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={this.irAbcd}
                        >HAT</Button>
                      </MenuItem>
                      <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.irAbcd}
                      >SEDAN</Button>
                    </MenuItem>
                </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <header>
              <AppBar>{this.titulo()}</AppBar>
            </header>
            <h1>Paràmetros</h1>
            <p>Ingresar 0, 1 o 2 dependiendo del paràmetro </p>
            <TextField
              placeholder="Mayor o igual que 60 marcar 1"
              label="Edad >= 60 años (1)"
              onChange={handleCambio('mayorSesenta')}
              defaultValue={valores.mayorSesenta}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Presiòn arterial mayor o igual que 140/90 marcar 1"
              label="Presiòn arterial >= 60 años (1)"
              onChange={handleCambio('mayorSientoCuarentanoventa')}
              defaultValue={valores.mayorSientoCuarentanoventa}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Alteraciòn lenguaje sin paresia marcar 1 - paresia unilateral marcar 2"
              label="Alteraciòn lenguaje sin paresia (1) - Paresia unilateral (2)"
              onChange={handleCambio('manifestaciones')}
              defaultValue={valores.manifestaciones}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="10-59 mins marcar 1 - > 60 mins marcar 2"
              label="10-59 mins (1) - > 60 mins (2)"
              onChange={handleCambio('duracion')}
              defaultValue={valores.duracion}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Diabetes marcar 1"
              label="Diabetes (1) - No diabetes (0)"
              onChange={handleCambio('diabetes')}
              defaultValue={valores.diabetes}
              margin="normal"
              fullWidth
            />
            <br />
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

export default ABCD;
