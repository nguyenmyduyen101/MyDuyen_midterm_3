import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../users/Search';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import User from '../users/User';
import ThemeChange from '../../context/ThemeChange';

const Home = () => (
    <div className="container">
        <ThemeChange />
        <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:id" component={User} />
            <Route path="/*" component={NotFound}></Route>
        </Switch>
    </div>
);

export default Home;