import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export class Exito extends Component {

  nuevaFicha = e => {
    // nuevo formulario //
    this.props.newForm();
  };

  continuar = e => {
    e.preventDefault();
    // PROCES FORM //
    this.props.sigStep();
  };

  atrás = e => {
    e.preventDefault();
    this.props.anteStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Exito" />
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
            <h1>La información esta siendo procesada...</h1>
            <p>Enviar información:</p>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <IconButton aria-label="send" ></IconButton>
            </Grid>
            <Button
              color="primary"
              variant="contained"
              onClick={this.nuevaFicha}
            >NUEVA FICHA</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Exito;
