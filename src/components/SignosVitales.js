import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export class SignosVitales extends Component {
  continuar = e => {
    e.preventDefault();
    this.props.sigStep();
  };

  StrokeLogo = (
    <Typography variant="h6" component="h1">
      STROKE - Signos Vitales
    </Typography>
  );

  titulo = () => {
    return <Toolbar>{this.StrokeLogo}</Toolbar>;
  };

  atrás = e => {
    e.preventDefault();
    this.props.anteStep();
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
            <AppBar title="Signos Vitales" />
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
            <TextField
              placeholder="Presión arterial"
              label="Presión arterial"
              onChange={handleCambio('presionArterial')}
              defaultValue={valores.presionArterial}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Glucometro"
              label="Glucometro"
              onChange={handleCambio('glucometro')}
              defaultValue={valores.glucometro}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Comentarios"
              label="Comentarios"
              onChange={handleCambio('comentarios')}
              defaultValue={valores.comentarios}
              margin="normal"
              fullWidth
            />
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
            >continuar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default SignosVitales;
