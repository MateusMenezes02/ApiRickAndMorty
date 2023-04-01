import { useState, useEffect } from "react"
import styles from "./galeria.module.css"

export function Galeria() {

    const [characters, setCharacters] = useState([])

    const getApi = async () => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character`)
            const data = await res.json()

            console.log(data.results)

            setCharacters(data.results)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=> {
        getApi()
    }, [])

    
        
        

    

    return (

        <div className={styles.tela}>

            {
                characters.map((character)=><div className={styles.card}>
                    
                    <img src={character.image} alt="" />
                    <h3>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Especie: {character.species}</p>
                    <p>Tipo: {character.type}</p>
                    <p>Gênero: {character.gender}</p>
                    
                </div>)
            }

        </div>
    )

}
