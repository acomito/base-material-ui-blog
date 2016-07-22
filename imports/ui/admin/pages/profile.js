import React from 'react';
import ProfileForm  from '../containers/profile-form.js';

export const AdminProfile = () => (
    <div>
      <ProfileForm />
    </div>
);



/*
import React from 'react';
import { RaisedButton, FlatButton, FloatingActionButton } from 'material-ui';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Formsy from 'formsy-react';
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


export class AdminProfile extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      open: false,
      canSubmit: false,
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {
      console.log(data);
      this.setState({open: false});
  }

render(){
	return (

		<Card style={styles.cardStyles}>
	        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
	            <CardText>
		            <FormsyText 
		                floatingLabelText="firstName"
		                style={styles.fieldStyle}
		                name="firstName" 
		                required 
		            />  
		            <FormsyText 
		                floatingLabelText="lastName"
		                style={styles.fieldStyle}
		                name="lastName" 
		                required 
		            />
		            <FormsyText 
		                floatingLabelText="email"
		                style={styles.fieldStyle}
		                name="email" 
		                required 
		            />
		            <FormsyText 
		                floatingLabelText="avatar"
		                style={styles.fieldStyle}
		                name="avatar" 
		                required 
		            />
	            </CardText>
	            <CardActions>
	            	<RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Save Profile" disabled={!this.state.canSubmit} />
	            </CardActions>
	        </Formsy.Form>
	    </Card>

	)
}
    
}*/
