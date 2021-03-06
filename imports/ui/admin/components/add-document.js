import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertDocument } from '../../../api/documents/methods.js';
import { RaisedButton, FlatButton, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Formsy from 'formsy-react';
import getSlug from 'speakingurl';
import Dialog from 'material-ui/Dialog';
import { MarkdownEditor } from 'react-markdown-editor';
import {Card, CardTitle } from 'material-ui/Card';
import { FormsySelect, FormsyText, } from 'formsy-material-ui/lib';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';

  const styles = {
    cardStyles: {
      width: "100%",
      margin: "40px auto",
      padding: "15px"
    },
    modalStyles: {
      width: '100%',
      maxWidth: 'none',
    },
    cardActionStyles: {
      width: "15%",
      display: "inline-block",
    },
    fieldStyle: {
      display: "block",
      width: "70%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px",
      marginTop: "30px"
    },
    actionContainer:{
      display: "inline",
      marginLeft: "10px",
    },
/*    floatingButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    }*/
  }

export class AddDocument extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.onSummerNoteChange = this.onSummerNoteChange.bind(this);
    this.state = {
      open: false,
      canSubmit: false,
      postBody: ''
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  onSummerNoteChange(contents) {
      console.log(contents);
      let newState = {};
      newState['postBody'] = contents;
      this.setState(newState);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {
      
      let title = data.title.trim();
      let name = Meteor.user().profile.name.first + ' ' + Meteor.user().profile.name.last;

      let docToInsert = {
        title: title,
        subtitle: data.subtitle.trim(),
        postBody:this.state.postBody,
        timeToRead: data.timeToRead,
        image: data.image,
        urlSlug: getSlug(title),
        authorAvatar: Meteor.user().profile.avatar,
        author: name
      };

      const closeModal = () => {
        this.setState({ open: false, canSubmit: false });
      };

      insertDocument.call(docToInsert, (error) => {   
          if (error) { Bert.alert(error.reason, 'danger'); return; }
          //else
          Bert.alert('Document added!', 'success');
          browserHistory.push('/documents');
          /*closeModal();*/
          return;
      });
  }

  handleClose() {
    this.setState({open: false});
  }


render() {

    return (
      <ReactCSSTransitionGroup
      transitionName="documents-list"
      transitionEnterTimeout={0}
      transitionLeaveTimeout={0}
    >
     
      <Card style={styles.cardStyles}>
      <CardTitle title="Add a Post" />
        {/*<FloatingActionButton style={styles.floatingButton} secondary={true} onTouchTap={this.handleOpen}>
                  <ContentAdd />
                </FloatingActionButton>
                <Dialog 
                    autoScrollBodyContent={true}
                    open={this.state.open} 
                    onRequestClose={this.handleClose} 
                    title="Add Document"
                    modal={true}
                    contentStyle={styles.modalStyles}
                >*/}
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
            <FormsyText 
                floatingLabelText="title"
                style={styles.fieldStyle}
                name="title" 
                required 
            />
            <FormsyText 
                floatingLabelText="Subtitle"
                style={styles.fieldStyle}
                name="subtitle" 
                required 
            />
            <FormsyText 
                floatingLabelText="image"
                style={styles.fieldStyle}
                name="image" 
                required 
            />
            <FormsyText
                floatingLabelText="timeToRead"
                style={styles.fieldStyle}
                validations="isNumeric"
                validationError="this must be a number"
                name="timeToRead" 
                required 
            />
            <MarkdownEditor initialContent="Test" iconsSet="font-awesome" onContentChange={this.onSummerNoteChange}/>
            <RaisedButton style={styles.buttonStyles} type="submit" secondary={true} label="Add Document" disabled={!this.state.canSubmit} />
            <RaisedButton style={styles.buttonStyles} label="Cancel" onTouchTap={this.handleClose} />  
        </Formsy.Form>
        {/*</Dialog>*/}
      </Card>
      </ReactCSSTransitionGroup>
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
