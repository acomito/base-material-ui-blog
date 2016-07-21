import React from 'react';
import {Card, CardMedia, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import { formatDate } from '../../modules/date-helpers.js';
import { createMarkup } from '../../modules/markup-helper.js';



export const IndividualBlog = ({ document }) => (
  <div>
	  <Card>
		  <CardHeader
		  	      title={document.title}
		  	      subtitle={formatDate(document.createdAt)}
		  	      actAsExpander={true}
		  	      avatar="https://s-media-cache-ak0.pinimg.com/564x/05/ec/02/05ec0224928c7f98b3f006ca7b9ba686.jpg"
		  	 />
		<CardMedia overlay={<CardTitle title={ document.title } subtitle={ document.subtitle }/>} >
		      <img src={ document.image } />
		    </CardMedia>
		<CardTitle  />
		<CardText>
			<div dangerouslySetInnerHTML={createMarkup(document.postBody)} />  
		</CardText>
		<CardActions>
			
		</CardActions>
		</Card>
	</div>
);