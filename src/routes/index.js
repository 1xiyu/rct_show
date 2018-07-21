import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabBarExample from '../views/TabBarExample';
import Login from '../views/login';
import Rule from '../views/rule';
import Menu from '../views/menu';
// import { CSSTransition } from 'react-transition-group';
// https://react-guide.github.io/react-router-cn/docs/Introduction.html
const routes = [
    {
        path: "/home",
        component: TabBarExample,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/menu',
        component: Menu
    },
    // {
    //     path: '/about',
    //     compoent:  About
    // },
    {
        path: '/rule',
        component: Rule
    }
    // TODO:// 默认的路由
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
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>;
  }
};