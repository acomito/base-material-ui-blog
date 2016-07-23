import React from 'react';
/*import AdminNavigation from '../components/admin-navigation';*/
import AppNavigation from '../../containers/app-navigation';
import EasyTransition from 'react-easy-transition'

const styles = {
	adminContainer: {
		margin: "20px 50px"
	}
};

export const Admin = React.createClass({
propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
		    <AppNavigation />
			    <main style={styles.adminContainer}>
			    	      <EasyTransition
					        path={location.pathname}
					        initialStyle={{opacity: 0}}
					        transition="opacity 0.1s ease-in"
					        finalStyle={{opacity: 1}}
					    	>
					        	{ this.props.children }
					        </EasyTransition>
			    </main>
		   </div>;
  }
});
