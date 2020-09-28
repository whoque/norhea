import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import { API_KEY } from "../../constant";
import axios from 'axios';
import Grid from './Grid/Grid';
import { mockResponse } from '../../constant';
import Header from './Header/Header';

const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        // const one = `http://newsapi.org/v2/top-headlines?page=1&pageSize=20&country=in&apiKey=${API_KEY}`;
        // const two = `http://newsapi.org/v2/top-headlines?page=2&pageSize=20&country=in&apiKey=${API_KEY}`;
        // const three = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
        // const four = `https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`;
        // const requestOne = axios.get(one);
        // const requestTwo = axios.get(two);
        // const requestThree = axios.get(three);
        // const requestFour = axios.get(four);
        // axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
        //     const responseOne = responses[0];
        //     const responseTwo = responses[1];
        //     const responesThree = responses[2];
        //     const responesFour = responses[2];
        //     const combinedResult = [
        //         ...responseOne.data.articles,
        //         ...responseTwo.data.articles,
        //         ...responesThree.data.articles,
        //         ...responesFour.data.articles,
        //     ];
        //     console.log(JSON.stringify(combinedResult));
        // })).catch(errors => {
        // })

        filterNews(mockResponse);
    }, []);
    const filterNews = (news) => {
        const blockers = JSON.parse(localStorage.getItem('norhea'));
        const result = news.filter(newsItem => {
            let checker = '';
            let isGood = true;
            if(newsItem.title) {
                checker = newsItem.title.toLowerCase();
            }
            if(newsItem.description) {
                checker = checker + ' ' + newsItem.description.toLowerCase();
            }
            if(blockers && blockers.length > 0) {
                blockers.forEach(element => {
                    if(checker.split(/\s+|\./).includes(element.toLowerCase())) {
                        isGood = false
                    }
                });
            }
            return isGood;
        });
        setNews(result);
    }
    const filterNewsWithChanges = () => {
        filterNews(news);
    }
    return (
        <div className={styles.main}>
            <Header filterFunc={filterNewsWithChanges} />
            <Grid news={news} />
        </div>
    )
}

export default Main;
