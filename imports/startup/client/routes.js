//Base Packages/Functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
//Pages
import { AdminBlogList } from '../../ui/admin/pages/blog-list';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
/*import { Signup } from '../../ui/pages/signup';*/
import { About } from '../../ui/pages/about';
import { Blog } from '../../ui/pages/blog';
import { Admin } from '../../ui/admin/layouts/admin-frame.js';
import { Contact } from '../../ui/pages/contact';
import { IndividualBlogPage } from '../../ui/pages/individual-blog';
import { AdminProfile } from '../../ui/admin/pages/profile.js';
import { AddBlogPage } from '../../ui/admin/pages/add-blog-page.js';


//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// see theme.js for an object you can use to customize your theme. See this for details: http://www.material-ui.com/#/customization/themes
import { muiTheme } from './theme'


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/admin/login',
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
          <Route name="documents" path="/documents" component={ AdminBlogList } />
          <Route name="profile" path="/profile" component={ AdminProfile } />
          <Route name="add" path="/add" component={ AddBlogPage } />   
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root')
  );
});
