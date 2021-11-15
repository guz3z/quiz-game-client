import React, {useState} from 'react';
import './style.css'

export const Homepage = () => {

    const [openCreateGame, setOpenCreateGame ] = useState(false);
    const [ openJoinGame, setOpenJoinGame ] = useState(false);
    const [ openLeaderboard, setOpenLeaderboard ] = useState(false);
    

    function handleOpenCreateGame() {
        setOpenCreateGame(true);
    };

    function handleOpenJoinGame() {
        setOpenJoinGame(true);
    };

    function handleOpenLeaderboard() {
        setOpenLeaderboard(true);
    };

    return(
        <>
            <main className="HomepageBody">
                <h1>hello homepage</h1>
                <div className="cG-btn">
                    <button onClick={handleOpenCreateGame}>Create Game</button>
                </div>
                <div className="jG-btn">
                    <button onClick={handleOpenJoinGame}>Join Game</button>
                </div>
                <div className="leaderboard-btn">
                    <button onClick={handleOpenLeaderboard}>Leaderboard</button>
                </div>
            </main>
        </>
    )
}