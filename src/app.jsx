import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader'
import 'antd-mobile/dist/antd-mobile.css';
import Main from './routes';
// import Main from './routes/demo';

render(<Main />, document.getElementById('root'));

export default hot(module)(Main);

