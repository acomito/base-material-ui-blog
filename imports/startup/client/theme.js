import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// this object is where you can customize your theme. It feeds into a wrapper around React-Router
// See this for details: http://www.material-ui.com/#/customization/themes


export const muiTheme = getMuiTheme({
  palette: {
 /*    primary1Color: '#009688',
    primary2Color: '#00796B',
    accent1Color: '#FF6E40',
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: grey300,
    pickerHeaderColor: cyan500,
    clockCircleColor: grey300,
    shadowColor: fullBlack,*/
  },
});