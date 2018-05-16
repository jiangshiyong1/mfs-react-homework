import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloComponent from './test1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloComponent />, document.getElementById('root'));
registerServiceWorker();
