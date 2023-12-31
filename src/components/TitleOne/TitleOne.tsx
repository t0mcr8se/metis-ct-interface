import { FC } from 'react'
import styles from './TitleOne.module.css'

interface ITitleOne {
    text: string,
    titleType: string,
}

const TitleOne: FC<ITitleOne> = ({text, titleType}) => {
    let color = ''
    if (titleType == 'white') color = 'title_one_white'
    else if (titleType == 'gray') color = 'title_one_gray'
    return (
        <>
            <div className={`${styles.season_title} ${styles[color]}`}>{text}</div>
        </>
    )
}

export default TitleOne