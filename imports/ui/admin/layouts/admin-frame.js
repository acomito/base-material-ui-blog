import React from 'react';
/*import AdminNavigation from '../components/admin-navigation';*/
import AppNavigation from '../../containers/app-navigation';

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
			    	{ this.props.children }
			    </main>
		   </div>;
  }
});
