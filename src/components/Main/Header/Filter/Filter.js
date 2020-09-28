import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
    const [blockers, setBlockers] = useState([]);
    const [blockTerm, setBlockTerm] = useState('');

    useEffect(() => {
        getBlockers();
    }, []);

    useEffect(() => {
        setBlockTerm('');
        localStorage.setItem("norhea_temp", JSON.stringify(blockers));
    }, [blockers]);

    const getBlockers = () => {
        const blockers = JSON.parse(localStorage.getItem('norhea'));
        setBlockers(blockers);
    };

    const blockerChangeHandler = (e) => {
        if(e.target.value[e.target.value.length - 1] !== ' ') {
            setBlockTerm(e.target.value);
        }
    };

    const blockerSubmitHandler = () => {
        if(blockTerm) {
            setBlockers([...blockers, blockTerm]);
        }
    }

    const blockElementClosehandler = (index) => {
        if (index > -1) {
            const filteredBlockers = [...blockers];
            if(filteredBlockers[index] === 'rhea' || filteredBlockers[index] === 'kangana') {
                alert("Sorry blocked on public demand !")
            } else {
                filteredBlockers.splice(index, 1);
                setBlockers(filteredBlockers);
            }
        }
    }

    return (
        <div className={styles.filter}>
            <div className={styles.blockers}>
                <p className={styles.blocker__p}>Blocking </p>
                <div className={styles.box}>
                    <ul className={styles.blocker__ul}>
                        {(blockers && blockers.length > 0) ? (
                            blockers.map((elment, index) => (
                                <li key={index}>{elment}</li>
                            ))
                        ) : null}
                    </ul>  
                </div>
            </div>
            <div className={styles.block__display}>
                <div className={styles.block__display__label}>Currently blocking</div>
                {(blockers && blockers.length > 0) ? (
                    blockers.map((elment, index) => (
                    <div className={styles.blocker__display_item} key={index}>
                        <div className={styles.blocker__display_itemTitle}>{elment}</div>
                        <button onClick={() => blockElementClosehandler(index)}>x</button>
                    </div>
                ))
                ) : null}
            </div>
            <div className={styles.block__add}>
                <input
                    type="text"
                    value={blockTerm}
                    onChange={blockerChangeHandler}
                    placeholder="Enter a term to block" />
                <button onClick={blockerSubmitHandler}>Block</button>
            </div>
        </div>
    )
}

export default Filter;
