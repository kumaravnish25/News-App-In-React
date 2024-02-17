import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

export const NewsBoard = (props) => {
  // console.log(props.category)
  const [articles, setArticles] = useState([]);
 
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [props.category]);

  return (
    <div>
      <h2 className="text-center">
        Latest News <span className="badge bg-danger mt-4">Today</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
