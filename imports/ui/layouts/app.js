import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';
import { ContactForm } from  '../components/contact-form';
import EasyTransition from 'react-easy-transition'



export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
      <ContactForm />
      <AppNavigation />
      {/*<Grid>*/}
      <EasyTransition
        path={location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.2s ease-in"
        finalStyle={{opacity: 1}}
    >
        { this.props.children }
        </EasyTransition>
      {/*</Grid>*/}
    </div>;
  },
});
