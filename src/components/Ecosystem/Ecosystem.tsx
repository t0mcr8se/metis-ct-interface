import Cards from '../CardItems/CardItems.tsx'
import styles from './Ecosystem.module.css'


const Ecosystem = () => {

    return (
        <>
            <div className={styles.ecosystem}>
                <div className="container">
                    <div className={styles.title}>Ecosystem dApps</div>
                    <Cards season={1}/>
                </div>
            </div>
        </>
    )
}

export default Ecosystem