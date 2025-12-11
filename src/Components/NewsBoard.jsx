import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) setArticles(data.articles);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]); // ✅ Add `category` to re-fetch on change

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.length === 0 ? (
          <p>Loading news...</p>
        ) : (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
