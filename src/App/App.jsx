import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Application from './pages/Application';

const theme = createMuiTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Application />
    </MuiThemeProvider>
  );
}