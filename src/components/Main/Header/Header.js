import React, { useState } from 'react';
import styles from './Header.module.css';
import Filter from './Filter/Filter';

const Header = ({filterFunc}) => {
    const [ showFilter, setShowFilter ] = useState(false);
    const applyFilterHandler = () => {
        const tempBlockers = JSON.parse(localStorage.getItem('norhea_temp'));
        localStorage.setItem("norhea", JSON.stringify(tempBlockers));
        filterFunc();
        setShowFilter(false);
    };
    return (
        <div className={`${styles.header} ${showFilter ? styles.header__show:''}`}>
            {showFilter ? (
                <div className={styles.filter}>
                    <Filter />
                </div>
            ) : null}
            <div>
                {showFilter ? (
                    <button
                        className={styles.filter__button}
                        onClick={applyFilterHandler}>Apply</button>
                ) : null}
                <button
                    onClick={()=>setShowFilter(!showFilter)}
                    className={styles.filter__button}>{ showFilter ? 'Cancel': 'Filter'}</button>
            </div>
        </div>
    )
}

export default Header;
