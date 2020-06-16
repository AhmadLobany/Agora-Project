import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Inventory } from '../src/store/Inventory'


const inventory = new Inventory()

ReactDOM.render(<App  store={inventory}/>, document.getElementById('root'));

serviceWorker.unregister();
