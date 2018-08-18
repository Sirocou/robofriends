import React from 'react';
import './Card.css';
import 'tachyons';

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

export default Card;
