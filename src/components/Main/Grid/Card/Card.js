import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({newsItem}) => {
    const [toggleFullscreen, setToggleFullscreen] = useState(false);
    const cardClickHandler = () => {
        setToggleFullscreen(true);
    };
    const backClickHandler = (e) => {
        e.stopPropagation();
        setToggleFullscreen(false);
    }
    return newsItem ? (
        <div onClick={cardClickHandler} className={`${styles.card} ${toggleFullscreen ? styles.fullCard:''}`}>
            <div className={styles.image__wrapper}>
                <img className={styles.image} alt="" src={newsItem.urlToImage} />
            </div>
            <div className={`${styles.title__Wrapper} ${toggleFullscreen ? styles.title__Wrapper__full:''}`}>
                <div className={`${styles.card__title} ${toggleFullscreen ? styles.card__title__full:''}`}> {newsItem.title} </div>
                <div className={`${styles.card__desc} ${toggleFullscreen ? styles.card__desc__full:''}`}> {newsItem.description} </div>
                <div className={`${styles.card__source} ${toggleFullscreen ? styles.card__source__full:''}`}> {newsItem.source.name || newsItem.author} </div>
                <div className={`${styles.fullButtons} ${toggleFullscreen ? styles.fullButtons__show:''}`}>
                    <a className={styles.button__goto} href={newsItem.url} target="_blank" rel="noopener noreferrer">Full article</a>
                    <button onClick={backClickHandler} className={styles.button__back}>Back</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default Card;
