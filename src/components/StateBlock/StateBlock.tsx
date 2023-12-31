import { FC } from 'react'
import styles from './StateBlock.module.css'

interface IStateBlock {
    type: string,
    text: string
    icon: string,
}

const StateBlock: FC<IStateBlock> = ({type, text, icon}) => {

    return (
        <>
            <div className={`${styles.card_used} ${styles[type]}`}>
                <span>{text}</span>
                <img src={icon} />
            </div>
        </>
    )
}

export default StateBlock