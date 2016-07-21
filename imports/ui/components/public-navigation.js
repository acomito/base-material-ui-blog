import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
  navLink: {
    color: "#ffffff"
  }
}

export const PublicNavigation = () => (
	<div>
    	<Link to="/about" >
    		<FlatButton style={styles.navLink} label="About" />
    	</Link>
    	<Link to="/blog"  >
    		<FlatButton style={styles.navLink} label="Blog" />
    	</Link>
        <Link to="/contact"  >
            <FlatButton style={styles.navLink} label="Contact" />
        </Link>
    </div>
);
