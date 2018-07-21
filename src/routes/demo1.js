import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton></AuthButton>
            <ul>
                <li><Link to="/public">public</Link></li>
                <li><Link to="private">private</Link></li>
            </ul>
            <hr/>
            <Route></Route>
        </div>
    </Router>
)






