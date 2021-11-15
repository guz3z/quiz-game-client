import React from 'react';
import { Header } from './layout/Header/index';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage/index';
import './style.css';


function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                {/*<Route path="/user">
                    <Pages.User />
                </Route>
                <Route path="/repo">
                    <Pages.RepoPage />
                </Route>*/}
            </Switch>
            {/*<Footer />*/}
        </>
    )
}

export default App;