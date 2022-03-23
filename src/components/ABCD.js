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

  irABCD = e => {
    e.preventDefault();
    this.props.goABCD();
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
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ABCD;
