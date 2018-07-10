import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabBarExample from '../views/TabBarExample';
import Login from '../views/login';
const Hello = () => <h2>Main</h2>;
const routes = [
    {
        path: "/tab",
        component: TabBarExample,
    },
    {
        path: '/login',
        component: Hello,
    }
];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
        // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

export default class Main extends React.Component {
  render() {
    return <Router>
        <div>
            <ul>
                <li>
                <Link to="/tab">tab</Link>
                </li>
                <li>
                <Link to="/login">login</Link>
                </li>
            </ul>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>;
  }
};