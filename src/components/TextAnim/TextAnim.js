import React from 'react';
import styles from './TextAnim.module.css';

const TextAnim = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content__container}>
                <p className={styles.content__container__text}>
                    Unloading
                </p>
                <ul className={styles.content__container__list}>
                    <li className={styles.content__container__list__item}>...</li>
                    <li className={styles.content__container__list__item}>Kangana</li>
                    <li className={styles.content__container__list__item}>NCB</li>
                    <li className={styles.content__container__list__item}>Rhea</li>
                </ul>
            </div>
        </div>
    )
}

export default TextAnim;
