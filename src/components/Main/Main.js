import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { API_KEY } from "../../constant";
import axios from "axios";
import Grid from "./Grid/Grid";
import { mockResponse } from "../../constant";
import Header from "./Header/Header";
import { useAlert } from "react-alert";

const Main = () => {
  const [news, setNews] = useState([]);
  const alert = useAlert();
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

    filterNews(mockResponse, true);
  }, []);
  const filterNews = (news, firstTimeLoad) => {
    const blockers = JSON.parse(localStorage.getItem("norhea"));
    const result = news.filter(newsItem => {
      let checker = "";
      let isGood = true;
      if (newsItem.title) {
        checker = newsItem.title.toLowerCase();
      }
      if (newsItem.description) {
        checker = checker + " " + newsItem.description.toLowerCase();
      }
      if (blockers && blockers.length > 0) {
        blockers.forEach(element => {
          if (checker.split(/\s+|\./).includes(element.toLowerCase())) {
            isGood = false;
          }
        });
      }
      return isGood;
    });
    firstTimeLoad
      ? setTimeout(() => {
          alert.show(`Blocking ${news.length - result.length} aticles..`);
        }, 5000)
      : alert.show(`Blocking ${news.length - result.length} aticles..`);
    setNews(result);
  };
  const filterNewsWithChanges = () => {
    filterNews(mockResponse, false);
  };
  return (
    <div className={styles.main}>
      <Header filterFunc={filterNewsWithChanges} />
      <Grid news={news} />
    </div>
  );
};

export default Main;
