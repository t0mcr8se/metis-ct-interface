
import CardItem from '../CardItem/CardItem.tsx'
import styles from './CardItems.module.css'
import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import { useCards } from '../../hooks/useMilestones.ts'
import { useAccount } from 'wagmi'


function Cards({season}: {season: number}) {
    const { address } = useAccount()
    const cards = useCards(address, season)

    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <CardItem 
                        cardArrow={arrow_right_white}
                        item={item}
                    />
                )
            })}
        </div>
    )
}

export default Cards
