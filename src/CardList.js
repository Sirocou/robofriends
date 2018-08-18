import React, { Component } from 'react';
import Card from './Card.js';
import 'tachyons';

class Cards extends Component {

  	render() {
    	return (
	    	<div className='tc'>
	    		{this.props.robots.map(x => <Card id={x.id} name={x.name} email={x.email}/>)}
	    	</div>
		);
	}
}

export default Cards;