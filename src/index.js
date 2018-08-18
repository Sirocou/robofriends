import React from 'react';
import {render} from 'react-dom';
import './index.css';
import CardList from './CardList.js';
import {robots} from './robots.js';
import registerServiceWorker from './registerServiceWorker';

render(
	<CardList robots={robots}/>, 
	document.getElementById('root'));
registerServiceWorker();
