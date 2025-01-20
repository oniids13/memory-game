

export default function Card({pokemonImg, pokemonName, pokemonList, setPokemonList, clicked, setCliked, score, setScore, setBestScore, setIsGameOver}) {

    function shuffleCard(array) {
        array = [...array]

        for (let a = array.length - 1; a > 0; a--) {
            let b = Math.floor(Math.random() * (a + 1))
            let c = array[a]
            array[a] = array[b]
            array[b] = c
        }
        
        console.log('Shuffled')
        return array

    }

    function handleClick() {
        if(!clicked.includes(pokemonName)) {
            setScore((score) => score + 1)
            setCliked((clicked) => [...clicked, pokemonName])
            setBestScore((bestscore) => (score >= bestscore ? score + 1 : bestscore))
        } else {
            setIsGameOver(true)
            setCliked([])
            
        }
    }

    

    return (
    
        <div className="card"
            onClick={() => {
                handleClick()
                const shuffledCard = shuffleCard(pokemonList)
                setPokemonList(shuffledCard)
            }}
        
        >
            <div className="card-pic">
                <img src={pokemonImg} alt={`Pokemon Name: ${pokemonName}`} />
            </div>
            <div className="card-detail">
                <h3>{pokemonName}</h3>
            </div>
        </div>

    )
}


