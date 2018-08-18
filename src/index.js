import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Cards from './CardList.js';
import {robots} from './robots.js';
import registerServiceWorker from './registerServiceWorker';

render(
	<Cards robots={robots}/>, 
	document.getElementById('root'));
registerServiceWorker();
