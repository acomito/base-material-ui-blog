import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertDocument } from '../../api/documents/methods.js';
import { RaisedButton, FlatButton, FloatingActionButton, Dialog } from 'material-ui';
import Mail from 'material-ui/svg-icons/content/mail';
import Formsy from 'formsy-react';
/*import Dialog from 'material-ui/Dialog';*/
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';



  const styles = {
/*    cardStyles: {
      width: "100%",
      margin: "40px auto",
      padding: "10px"
    },*/
    containerDiv: {
      zIndex: 1000
    },
    fieldStyle: {
      display: "block",
      width: "90%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px",
      marginTop: "20px",
      marginBottom: "10px"
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

export class ContactForm extends React.Component {

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




render() {

    return (
      <div style={styles.containerDiv}>
        <FloatingActionButton style={styles.floatingButton} secondary={true} onTouchTap={this.handleOpen}>
          <Mail />
        </FloatingActionButton>
        <Dialog open={this.state.open} onRequestClose={this.handleClose} title="Contact Me" >
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
            <FormsyText 
                floatingLabelText="Your Name"
                style={styles.fieldStyle}
                name="name" 
                required 
            />
            <FormsyText 
                floatingLabelText="Your Email"
                style={styles.fieldStyle}
                name="email" 
                required 
            />
            <FormsyText 
                floatingLabelText="How Can I Help You?"
                style={styles.fieldStyle}
                name="summary" 
                required 
            />
            <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Send Message" disabled={!this.state.canSubmit} />
            {/*<RaisedButton style={styles.buttonStyles} label="Cancel" onTouchTap={this.handleClose} />  */}
        </Formsy.Form>
        </Dialog>
      </div>
    );
  }
}

/*export class AddDocument extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }


  submit(data, resetForm) {
      
      let title = data.document.trim();

      insertDocument.call({title}, (error) => {   
          if (error) { Bert.alert(error.reason, 'danger'); return; }
          //else
          Bert.alert('Document added!', 'success');
          input.setState({ value: '' });
          return;
      });
  }

  

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card style={styles.cardStyles} >
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
          <FormsyText ref={(node) => {input = node}} floatingLabelText="Document" style={styles.textField} name="document" required />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Add Document" disabled={!this.state.canSubmit} />
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}*/


/*export const AddDocument = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertDocument }
      placeholder="Type a document title and press enter..."
    />
  </FormGroup>
);*/