// consider https://www.npmjs.com/package/react-share
// http://sharingbuttons.io/
//https://www.npmjs.com/package/react-markdown-editor
import React from 'react';
/*import { Blog } from './blog.js';*/
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';
import AccessTime from 'material-ui/svg-icons/device/access-time';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
/*    width: "95%",*/
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  iconStyles: {
    height: "18px",
    marginLeft: "15px",
    color: "#ffffff"
  }
};


export const BlogList = ({ documents }) => (
  <div style={styles.root}>
    <GridList cellHeight={300} cols={3} style={styles.gridList} >
      {documents.map((blog) => (
        <Link key={blog._id} to={'blog/'+ blog.urlSlug } >
          <GridTile
            title={blog.title}
            subtitle={<span><b>{blog.subtitle}</b> <AccessTime style={styles.iconStyles} />{blog.timeToRead} minute read</span>}
          >
          { blog.image ? <img src={blog.image} /> : <img src="http://i.imgur.com/AMf9X7E.jpg" /> }
            
          </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

BlogList.propTypes = {
  documents: React.PropTypes.array,
};



