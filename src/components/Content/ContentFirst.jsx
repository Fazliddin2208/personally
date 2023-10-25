import React, { useEffect, useState } from "react";
import articlesData from "../../data/articles.json";
import "./article.scss";
import ArticleCard from "./ArticleCard";

export default function ContentFirst() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articles = [];
    if (articlesData?.articles?.length >= 4) {
      articlesData?.articles?.map((item, index) => {
        if (window.innerWidth > 1000) {
          if (index < 3) {
            articles.push(item);
          }
        } else {
          if (index < 4) {
            articles.push(item);
          }
        }
      });
    }
    setArticles(articles);
  }, []);

  return (
    <div className="article-cards">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  );
}
