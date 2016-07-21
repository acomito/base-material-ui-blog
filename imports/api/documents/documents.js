import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Documents = new Mongo.Collection('Documents');

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const Schemas = {};

/*Schemas.Status = new SimpleSchema({
    draft: {
        label: "Certified HUBZone Businesses",
        type: Boolean,
        optional: true,
        autoValue: function() {
            // if this is on insert, automatically make it a draft. User manually must publish it.
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return true;
            }
        }
    },
    published: {
        label: "Certified HUBZone Businesses",
        type: Boolean,
        optional: true,
        autoValue: function() {
            // if this is on insert, automatically make it a draft. User manually must publish it.
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return false;
            }
        }
    }
});*/


Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  subtitle: {
    type: String,
    label: 'The subtitle of the document.',
  },
  status: {
    type: String,
    autoValue: function() {
            // if this is on insert, automatically make it a draft. User manually must publish it.
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return 'draft';
            }
        }
  },
  postBody: {
     type: String,
     optional: true
  },
  timeToRead: {
     type: String,
     optional: true
  },
  image: {
     type: String,
     optional: true
  },
  tags: {
    type: [String],
    optional: true
  },
  createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Date()
            }
        }
    },
    lastUpdated: {
        type: Date,
        autoValue: function() {
            return new Date()
        }
    },
    createdBy: {
        type: String,
        autoValue: function() {
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return Meteor.userId();
            }
        }
    }
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => faker.hacker.phrase(),
});
