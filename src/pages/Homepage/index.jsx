import React, {useState} from 'react';
import { CreateGame } from '../../components/CreateGame/CreateGame';
import { Modal } from '@material-ui/core'
import './style.css'

export const Homepage = () => {

    const [openCreateGame, setOpenCreateGame ] = useState(false);
    const [ openJoinGame, setOpenJoinGame ] = useState(false);
    const [ openLeaderboard, setOpenLeaderboard ] = useState(false);
    

    function handleOpenCreateGame() {
        setOpenCreateGame(true);
    };

    function handleCreateClose() {
        setOpenCreateGame(false);
    }

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
                <div className="hp-btn">
                    <div>
                        <button className="cG-btn" onClick={handleOpenCreateGame}>Create Game</button>
                    </div>
                    <Modal open={openCreateGame} onClose={handleCreateClose}>
                        <CreateGame />
                    </Modal>
                    <div >
                        <button className="jG-btn" onClick={handleOpenJoinGame}>Join Game</button>
                    </div>
                    <div >
                        <button className="leaderboard-btn"onClick={handleOpenLeaderboard}>Leaderboard</button>
                    </div>
                </div>
            </main>
        </>
    )
}