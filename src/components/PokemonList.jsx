import React, {useEffect,useState} from 'react';
import PokemonDetail from './PokemonDetail.jsx'

export default function PokemonList(){
    const [pokemons,setPokemons] = useState(null);

    useEffect(() => {
      //componentDidMount,componentDidUpdate
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res =>{ 
        // console.log(res) 
        return res.json()
      })
      .then((data =>{
        console.log(data) 
        setPokemons(data.results)
      }))
    },[])

    return (
        <div>
        {
            pokemons && pokemons.map((pokemon) =>{
            return <PokemonDetail key={pokemon.name} {...pokemon}/>
            })      
        }
        </div>
    )

}