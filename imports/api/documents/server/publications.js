import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';

Meteor.publish('documents', () => Documents.find());

Meteor.publish('singleBlog', function(id){
	check(id, String);
	return  Documents.find({_id: id});
});

Meteor.publish('publishedBlogs', function(){
	return  Documents.find({ status: { $ne: 'draft' } } );
});



