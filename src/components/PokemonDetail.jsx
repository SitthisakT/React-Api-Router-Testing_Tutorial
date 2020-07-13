import React, {useEffect,useState} from 'react';
import axios from 'axios'

export default function PokemonDetail(props){
    const {name, url} = props
    const [pokeImg,setPokeImg] = useState(null)
  
    console.log(props)
  
    useEffect(()=>{
      async function fetchPokemon(url){
        try{
          const res = await axios.get(url)
          const data = await res.data 
          setPokeImg(          
            data.sprites.front_default ??
            'https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/128?cb=20170407192412'
          )
        }catch(err){}
  
      } 
      fetchPokemon(url)
  
    },[url])
  
    return (
      <div>
        <p>{name}</p>
        <img src={pokeImg} alt='pokemon'/>
      </div>
    )
}