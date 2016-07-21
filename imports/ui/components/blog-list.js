import React from 'react';
import { Blog } from './blog.js';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router';

const styles = {
  cardList: {
    marginBottom: "100px",
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "95%",
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};


export const BlogList = ({ documents }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={300}
      cols={3}
      style={styles.gridList}
    >
      {documents.map((blog) => (
        <Link key={blog._id} to={'blog/'+ blog._id } >
          <GridTile
            title={blog.title}
            subtitle={<span>by <b>{blog.subtitle}</b></span>}
          >
          {blog.image ?
            <img src={blog.image} /> :
            <img src="http://i.imgur.com/AMf9X7E.jpg" />
          }
            
          </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

BlogList.propTypes = {
  documents: React.PropTypes.array,
};


/*export const BlogList = ({ documents }) => (
  documents.length > 0 ? <div style={styles.cardList}>
    {documents.map((doc) => (
      <Blog key={ doc._id } document={ doc } />
    ))}
  </div> :
  <div>No Blog Posts Yet....</div>
);

BlogList.propTypes = {
  documents: React.PropTypes.array,
};*/
