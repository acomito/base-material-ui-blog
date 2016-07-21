import React from 'react';
import BlogList from '../containers/blog-list.js';


styles={
	containerDiv: {
		margin: "20px 0",
	}
}

export const Blog = () => (
  <div style={styles.containerDiv}>
    <h2 className="text-center">Blog Page</h2>
    <BlogList />
  </div>
);