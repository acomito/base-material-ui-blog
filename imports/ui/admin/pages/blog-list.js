import React from 'react';
import DocumentsList from '../containers/document-list.js';
import { AddDocument } from '../../admin/components/add-document.js';

export const AdminBlogList = () => (
    <div>
      <h4>Blogs</h4>
      <AddDocument />
      <DocumentsList />
    </div>
);
