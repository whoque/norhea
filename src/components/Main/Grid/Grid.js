import React from 'react';
import styles from './Grid.module.css';
import Card from './Card/Card';

const Grid = ({news}) => {
    return (
        <div className={styles.grid}>
            <ul className={styles.cards}>
                {(news.length > 0) ? (
                    news.map((newsItem, index) => (
                        <li key={index}>
                            <Card newsItem={newsItem} />
                        </li>
                    ))
                ) : null}
            </ul>
        </div>
    )
}

export default Grid;