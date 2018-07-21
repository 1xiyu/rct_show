import React from 'react';
import { Link } from 'react-router-dom'

export default class TabBarExample extends React.Component {
    render() {
      return (  
        <div> <Link to="/home">去点餐</Link></div>
      );
    }
}