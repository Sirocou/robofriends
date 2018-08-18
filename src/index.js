import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Cards from './Card';
import {robots} from './robots.js';
import registerServiceWorker from './registerServiceWorker';

render(
	<Cards/>, 
	document.getElementById('root'));
registerServiceWorker();
