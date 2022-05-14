import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import logo from '../img/stoke.PNG';
import abcd from '../img/abcd.PNG';

export class ABCDRes extends Component {
    continuar = e => {
      e.preventDefault();
      this.props.sigStep();
    };
    nuevaFicha = e => {
        // nuevo formulario //
        this.props.newForm();
    };
    irAbcd = e => {
      e.preventDefault();
      this.props.sigAbcd();
    };
  
    StrokeLogo = (
      <Typography variant="h6" component="h1" align='right' >
        <img src={logo} height="50" alt='- Ficha de Paciente'/> 
         <br></br>Resultado ABCD
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
                <AppBar>
                  {this.titulo()}
                </AppBar>
              </header>
              <img src={abcd} alt='abcd' /> 
            </Dialog>
          </>
        </MuiThemeProvider>
      );
    }
  }
  
  export default ABCDRes;
  