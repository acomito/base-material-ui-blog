import { composeWithTracker } from 'react-komposer';
import { ProfileForm } from '../components/profile-form.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {

  if (Meteor.user()) {
    const user = Meteor.user();
    onData(null, { user });
  }
};


export default composeWithTracker(composer, Loading)(ProfileForm);