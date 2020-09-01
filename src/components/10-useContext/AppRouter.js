import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <>
                <NavBar />
                <div className="container mt-2">
                    <Switch>
                        <Route path="/about" component={AboutScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/" component={HomeScreen} />
                    </Switch>
                </div>
            </>
        </BrowserRouter>
    );
};
