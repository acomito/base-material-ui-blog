import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { BlogList } from '../components/blog-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('publishedBlogs');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(BlogList);
