import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import TabBarExample from './views/TabBarExample';

render(<TabBarExample />, document.getElementById('root'));

export default hot(module)(TabBarExample);

