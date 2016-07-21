import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DeleteDialog from './delete-dialog.js';
import UpdateDialog from './update-dialog.js';




const handleUpdateDocument = (documentId, update) => {

    updateDocument.call({_id: documentId, update }, (error) => {
      if (error) { Bert.alert(error.reason, 'danger'); return; }
      Bert.alert('Document updated!', 'success');
    });

};

const handleRemoveDocument = (documentId) => {

    removeDocument.call({ _id: documentId, }, (error) => {
      if (error) { Bert.alert(error.reason, 'danger'); return; }
        Bert.alert('Document removed!', 'success');
    });

};

// see this for what is happening here: https://facebook.github.io/react/tips/dangerously-set-inner-html.html
const reateMarkup = (html) => { 
  return {__html: html }; 
};


export const Document = ({ document }) => (


  <Card key={ document._id }>
    <CardHeader
      title={document.title}
      subtitle={document.status}
      actAsExpander={true}
      avatar="http://i.imgur.com/AMf9X7E.jpg"
      showExpandableButton={true}
    />
    <CardMedia
      overlay={<CardTitle title={document.title} subtitle={document.subtitle} />}
      expandable={true}
    >
      <img src="http://i.imgur.com/AMf9X7E.jpg" />
    </CardMedia>
    {/*<CardTitle title={document.title} subtitle="Card subtitle" expandable={true} />*/}
    <CardText expandable={true}>
    <div dangerouslySetInnerHTML={reateMarkup(document.postBody)} />  
      <h6>status: {document.status}</h6>
    </CardText>
    <CardActions expandable={true}>
      <UpdateDialog 
        itemType="Document" 
        docToUpdate={{
            _id: document._id, 
            title: document.title,
            subtitle: document.subtitle,
            status: document.status,
          }}
        updateMethod={handleUpdateDocument.bind(this)} />
      <DeleteDialog itemType="Document" deleteMethod={handleRemoveDocument.bind(this, document._id )} />
    </CardActions>
  </Card>
);


/*export const Document = ({ document }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ document.title }
          onKeyUp={ handleUpdateDocument.bind(this, document._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, document._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);*/
