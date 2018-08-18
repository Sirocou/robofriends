import React, { Component } from 'react';
import Card from './Card.js';
import 'tachyons';

const CardList = ({robots}) => {
	return (
		<div className='tc'>
    		{robots.map(x => <Card id={x.id} name={x.name} email={x.email}/>)}
    	</div>
	)
}

export default CardList;