import React, {useState} from 'react';

import axios from 'axios';

export function CreateGame() {

    const [ userName, setUsername ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ difficulty, setDifficulty ] = useState("");

    async function getQuestions(category, difficulty) {
        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        const { data } = await axios.get(url);
        return data.results
    }

    return (

    )
}