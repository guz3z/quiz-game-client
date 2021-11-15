import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header/index';
import '.style.css';


function App() {
    return (
        <>
            <Header />
            {/*<Switch>
                <Route exact path="/">
                    <Pages.Welcome />
                </Route>
                <Route path="/user">
                    <Pages.User />
                </Route>
                <Route path="/repo">
                    <Pages.RepoPage />
                </Route>
            </Switch>
            <Footer />*/}
        </>
    )
}