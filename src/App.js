import React from 'react';
import { Header } from './layout/Header/index';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage/index';
import { Lobby } from './pages/Lobby/index';
import './style.css';


function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/lobby">
                    <Lobby />
                </Route>
                {/*<Route path="/repo">
                    <Pages.RepoPage />
                </Route>*/}
            </Switch>
            {/*<Footer />*/}
        </>
    )
}

export default App;