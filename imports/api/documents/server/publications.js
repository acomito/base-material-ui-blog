import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';

Meteor.publish('documents', () => Documents.find());

Meteor.publish('singleBlog', function(urlSlug){
	check(urlSlug, String);
	return  Documents.find({urlSlug: urlSlug});
});

Meteor.publish('publishedBlogs', function(){
	return  Documents.find({ status: { $ne: 'draft' } } );
});



