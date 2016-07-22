import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
/*import { ProcurementContacts } from './procurementContacts';*/
/*import {  } from './documents';*/
/*import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';*/

 Meteor.methods({
  updateUser(userDoc){
    check(userDoc, Object);
    check(userDoc.first, String);
    check(userDoc.last, String);
    check(userDoc.avatar, String);
    check(userDoc.email, String);
    const thisUserId = this.userId;

    const updatedUseDoc = {
        profile: {
            name: {
              first: userDoc.first,
              last: userDoc.last
            },
            avatar: userDoc.avatar,
          },
          'emails.0.address': userDoc.email
    };

    Meteor.users.update({_id: thisUserId }, { $set: updatedUseDoc });
  }
});

/*export const insertDocument = new ValidatedMethod({
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
});*/
