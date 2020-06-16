import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import { Inventory } from '../src/store/Inventory'


const inventory = new Inventory()

const stores = {inventory }

ReactDOM.render(<Provider {... stores}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
