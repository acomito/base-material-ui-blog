/*import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';*/
import { Documents } from './documents';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';
/*import { Mongo } from 'meteor/mongo';*/


export const insertDocument = new ValidatedMethod({
  name: 'documents.insert',
  validate: new SimpleSchema({
    'title': { type: String },
    'subtitle': {type: String},
    'postBody': {type: String},
    'image': {type: String},
    'timeToRead': {type: String},
  }).validator(),
  run(document) {
    console.log(document);
    Documents.insert(document);
  },
});


/*Meteor.methods({

  'documents.update'(id, doc) {
        console.log(doc);
        check(id, String);
        check(doc, Object);
        check(doc.title, String);
        check(doc.subtitle, String);
        check(doc.status, String);

       // Make sure the user is logged in before inserting a task
          if (! this.userId) { throw new Meteor.Error('not-authorized');}

        Documents.update({_id: id}, { $set: doc});

  }

});*/

export const updateDocument = new ValidatedMethod({
  name: 'documents.update',
  validate: new SimpleSchema({
      _id: { type: String },
    'update': { type: Object },
    'update.title': { type: String },
    'update.subtitle': { type: String },
    'update.status': { type: String },
  }).validator(),
  run({ _id, update }) {
    console.log(update);
    Documents.update({_id: _id}, { $set: update});
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    insertDocument,
    updateDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
