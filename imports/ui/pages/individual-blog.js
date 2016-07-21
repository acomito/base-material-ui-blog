import React from 'react';
import IndividualBlogContainer from '../containers/individual-blog.js';
import { browserHistory } from 'react-router';

styles={
	cardStyles: {
		width: "80%",
		margin: "80px auto 20px auto"
	}
}


export const IndividualBlogPage = (props) => (
    <div style={styles.cardStyles}>
    	<IndividualBlogContainer id={props.params.id} />
    </div>
);