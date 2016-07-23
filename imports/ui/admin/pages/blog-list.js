import React from 'react';
import DocumentsList from '../containers/document-list.js';
import { AddDocument } from '../../admin/components/add-document.js';
import { Link } from 'react-router';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
	floatingButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }
};

export const AdminBlogList = () => (
    <div>
      <h4>Blogs</h4>
      {/*<AddDocument />*/}
      <Link to="add"><FloatingActionButton secondary={true} style={styles.floatingButton}><ContentAdd /></FloatingActionButton></Link>
      <DocumentsList />
    </div>
);
