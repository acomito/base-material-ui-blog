import React from 'react';
import { RaisedButton, FlatButton, FloatingActionButton } from 'material-ui';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { updateUser } from '../../../api/adminUser/methods.js';
import Formsy from 'formsy-react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';




  const styles = {
    cardStyles: {
      width: "60%",
      margin: "100px auto",
      padding: "10px"
    },
    cardActionStyles: {
      width: "15%",
      display: "inline-block",
    },
    fieldStyle: {
      display: "block",
      width: "90%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px"
    },
    actionContainer:{
      display: "inline",
      marginLeft: "10px",
    },
    floatingButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }
  }


export class ProfileForm extends React.Component {

   constructor(props) {
    super(props);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      canSubmit: false,
    };      
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {

      let userDoc = {
        'first': data.first,
        'last': data.last,
        'email': data.email,
        'avatar': data.avatar,
      };

      Meteor.call('updateUser', userDoc, function(error, response){
            if (error) { Bert.alert(error.reason, 'danger'); return; }
            Bert.alert('Profile successfully updated!', 'success');
            return;
      });

  }

render(){
  return (

    <Card style={styles.cardStyles}>
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
              <CardText>
                <FormsyText 
                    floatingLabelText="first name"
                    style={styles.fieldStyle}
                    name="first"
                    defaultValue={this.props.user.profile.name.first}
                    required
                />  
                <FormsyText 
                    floatingLabelText="last name"
                    style={styles.fieldStyle}
                    name="last"
                    defaultValue={this.props.user.profile.name.last}
                    required 
                />
                <FormsyText 
                    floatingLabelText="email"
                    style={styles.fieldStyle}
                    name="email"
                    defaultValue={this.props.user.emails[0].address}
                    required
                />
                <FormsyText 
                    floatingLabelText="avatar"
                    style={styles.fieldStyle}
                    defaultValue={this.props.user.profile.avatar}
                    name="avatar" 
                />
              </CardText>
              <CardActions>
                <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Save Profile" disabled={!this.state.canSubmit} />
              </CardActions>
          </Formsy.Form>
      </Card>

  )
}
    
}
