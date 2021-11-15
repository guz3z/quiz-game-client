import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeUser } from '../../actions/index'
import axios from 'axios';
import './style.css'
import { Redirect } from 'react-router-dom';

export function CreateGame() {

    const [ username, setUsername ] = useState("");
    const [ category, setCategory ] = useState([]);
    const [ difficulty, setDifficulty ] = useState("");
    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);

    const dispatch = useDispatch();
    const socket = useSelector((state) => state.socket)

    //function to make gameIDMaker
    function gameIDMaker() {
        const gameIDs = "qwertyuiop1234567890".split("");
        let result = "";
        for (let i = 0; i < 5; i++) {
            const x = Math.floor(Math.random() * gameIDs.length);
            result += gameIDs[x];
        }
    }

    //function to fetch questions
    async function getQuestions(category, difficulty) {
        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        const { data } = await axios.get(url);
        return data.results
    }

    //to map category options on dropdown list
    useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await axios.get('https://opentdb.com/api_category.php');
				setCategory(data.trivia_categories);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCategories();
	}, []);

    //render category options
    const renderCategoryOptions = () =>
	category.map((category) => (
		<option key={category.id} value={category.id}>
			{category.name}
		</option>
	));
    

    //add username handling
    const handleUsername = e => 
    setUsername(e.target.value);

    //add category handling
    const handleCategory = (e) =>
    setCategory(e.target.value);

    //add dificulty handling
    const handleDifficulty = e =>
    setDifficulty(e.target.value);


    //Form submission handling
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let gameID = gameIDMaker();

        //axios getQuestions request
        const questions = await getQuestions(category, difficulty);
        socket.emit("create game", {
            room: gameID,
            category,
            difficulty
        });
        dispatch(storeUser(username));
        setUsername('');
        setCategory('');
        setDifficulty('');
        setIsFormSubmitted(true);
    };



    return (
        <div className="form-container">
            <form aria-label="form" onSubmit={handleFormSubmit}>
                <h2>Create a game</h2>
                <div className="username-section">
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleUsername} value={username} className="username-input"></input>
                </div>
                <div className="category-section">
                    <label htmlFor="category">Select the Category:</label>
					<select
						id="category"
						name="category"
                        value={category}
						onChange={handleCategory}
						required
                        multiple={false}
					>
						{renderCategoryOptions()}
					</select>
                </div>
                <div className="difficulty-section">
                    <label htmlFor="difficulty">Choose the difficulty level:</label>
					<select
						onChange={handleDifficulty}
						value={difficulty}
						id="difficulty"
						name="difficulty"
						required
					>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
                </div>
                <div className="createGame-btnForm">
                    <button className="createGame-btn" type="submit">Create Game</button>
                </div>
            </form>
            {isFormSubmitted && <Redirect to='/lobby'/>}
        </div>

    );
};