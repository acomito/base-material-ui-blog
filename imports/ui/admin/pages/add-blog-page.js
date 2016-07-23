import React from 'react';
import { AddDocument } from '../../admin/components/add-document.js';
import { Link } from 'react-router';
import { RaisedButton, FlatButton, FloatingActionButton } from 'material-ui';

export const AddBlogPage = () => (
    <div>
      <Link to="documents"><RaisedButton label="Back to Posts" /></Link>
      <AddDocument />
    </div>
);
