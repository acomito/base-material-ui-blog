import React from 'react';
import { parseMarkdown } from 'meteor/themeteorchef:commonmark';

export const createMarkup = (html) => {
  	if ( html ) {
  	console.log(html);
  	let parsedMarkdown = parseMarkdown( html );
  	console.log(parsedMarkdown);
      return { __html: parsedMarkdown };
    }
};

