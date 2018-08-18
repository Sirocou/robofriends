import React, { Component } from 'react';
import './Card.css';
import 'tachyons';
import {robots} from './robots.js';

class Cards extends Component {
  render() {
    return (
    	<div className='tc'>
    		{robots.map(x => <Card id={x.id} name={x.name} email={x.email}/>)}
    	</div>
	);
  }
}

const Card = ({id, name, email}) => {
	return (
		<div id='card' className='tc bg-light-blue dib br3 pa3 ma4 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>
		    		{ name }
		    	</h2>
		    <p>
		    	{ email }
		    </p>
			</div>
		</div>
    );
}

export default Cards;
