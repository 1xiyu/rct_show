import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Example = () => (
    <Router>
        <div>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/topic">主题</Link></li>
                </ul>
            </div>
            <hr/>
          
            <Route path="/:id" component={Child}/>
        </div>
    </Router>
);

const Child = ({match}) => (
    <div>
        <h3>Id: {match.params.id}</h3>
    </div>
);

export default Example;






