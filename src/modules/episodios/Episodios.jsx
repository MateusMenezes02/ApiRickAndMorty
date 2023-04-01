import styles from './episodios.module.css'
import { useEffect, useState } from 'react';
export function Episodios() {

    const [episode, setEpisode] = useState([])

    const getApi = async () => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/episode`)
            const data = await res.json()

            console.log(data.results)

            setEpisode(data.results)
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
                episode.map((episode)=><div className={styles.card}>
                    
                    <div className={styles.dadosEp}>
                    
                    <h3>{episode.name}</h3>
                    <p>{episode.episode}</p>
                    <p>{episode.air_date}</p>
                    
                    </div>
                    
            </div>)
            }

        </div>
    )

}