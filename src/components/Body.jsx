import { useState, useEffect } from "react";
import { fetchPokemons } from "../api";
import Cardgrid from "./Cardgrid";




export default function Body() {

    const [pokemonList, setPokemonList] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clicked, setClicked] = useState([])


    useEffect(() => {
        fetchPokemons().then((pokemon) => {
            setPokemonList(pokemon)
        })
    },[])


    return (
        <>
        <div className="main-content">
            <h1>Welcome to Memory Game!</h1>
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>

            {score === 20 ? (
                <p>Good Job! You got them all!</p>
            ): null}

        

            <Cardgrid 
                pokemonList={pokemonList}
                setPokemonList={setPokemonList}
                clicked={clicked}
                setClicked={setClicked}
                score={score}
                setScore={setScore}
                setBestScore={setBestScore}
            />
        </div>
        </>
    )
}


