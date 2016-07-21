//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
//Pages
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
/*import { Signup } from '../../ui/pages/signup';*/
import { About } from '../../ui/pages/about';
import { Blog } from '../../ui/pages/blog';
import { Admin } from '../../ui/layouts/admin-frame.js';
import { Contact } from '../../ui/pages/contact';
import { IndividualBlogPage } from '../../ui/pages/individual-blog';


//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
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


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      {/*----------------------------------------
              PUBLIC ROUTES 
        ----------------------------------------*/}
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />     
        <Route name="about" path="/about" component={ About } />
        <Route name="blog" path="/blog" component={ Blog } />
        <Route name="blog-post" path="/blog/:id" component={ IndividualBlogPage } />
        <Route name="contact" path="/contact" component={ Contact } />      
        {/*--- ADMIN SIGN UP & LOGIN ---*/}
        {/*<Route name="signup" path="admin/signup" component={ Signup } />*/}
        <Route name="login" path="admin/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
      </Route>
      {/*----------------------------------------
              ADMIN ROUTES 
        ----------------------------------------*/}
        <Route name="admin"  path="/admin" component={ Admin } onEnter={ requireAuth } >
          <Route name="documents" path="/documents" component={ Documents } />
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
