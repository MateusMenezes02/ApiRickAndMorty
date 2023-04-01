import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
export function Navbar() {
 
    return(

        <div className={styles.navBar}>
            
            <h1 className='titulo'>Rick and Morty's</h1>
            
            <nav className={styles.linksNavBar}>
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="Galeria">Galeria</Link>
                </li>
                <li>
                    <Link to="Episodios">Episódios</Link>
                </li>
            </ul>

            </nav>
        </div>

    )

}