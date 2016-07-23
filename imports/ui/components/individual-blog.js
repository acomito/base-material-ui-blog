import React from 'react';
import {Card, CardMedia, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import { formatDate } from '../../modules/date-helpers.js';
import { createMarkup } from '../../modules/markup-helper.js';

export const IndividualBlog = ({ document }) => (
  <div>
	  <Card>
		  <CardHeader
		  	      title={document.title}
		  	      subtitle={formatDate(document.createdAt)}
		  	      actAsExpander={true}
		  	      avatar={ document.authorAvatar }
		  	 />
		<CardMedia overlay={ <CardTitle title={ document.title } subtitle={ document.subtitle } />}>
		    <img src={document.image} />
		</CardMedia>
		<CardTitle subtitle={ 'by: ' + document.author } />
		<CardText>
			<div dangerouslySetInnerHTML={createMarkup(document.postBody)} />  
		</CardText>
		</Card>
	</div>
);