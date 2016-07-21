import { composeWithTracker } from 'react-komposer';
import { Documents } from '../../api/documents/documents.js';
import { IndividualBlog } from '../components/individual-blog.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (props, onData) => {
	
  	const subscription = Meteor.subscribe('singleBlog', props.id);
  	if (subscription.ready()) {
    	const document = Documents.findOne({_id: props.id});
    	onData(null, { document });
  	}
};

export default composeWithTracker(composer, Loading)(IndividualBlog);