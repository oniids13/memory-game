import { useEffect, useState } from "react";
import Card from "./Card";



export default function Cardgrid({pokemonList, setPokemonList, clicked, setClicked, score, setScore, setBestScore}) {
   
    
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(
            pokemonList.map((pokemon) =>(
                <Card
                    key={pokemon.name}
                    pokemonName = {pokemon.name}
                    pokemonImg = {pokemon.img}
                    pokemonList={pokemonList}
                    setPokemonList={setPokemonList}
                    clicked={clicked}
                    setCliked={setClicked}
                    score={score}
                    setScore={setScore}
                    setBestScore={setBestScore}
                />
            ))
        )
        console.log('Cards Rendering')
    }, [pokemonList])

        return(
            <div className="card-grid">
                {cards}
            </div>
        )

}