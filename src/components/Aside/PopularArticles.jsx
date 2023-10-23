import React from "react";
import articlesData from "../../data/articles.json";

export default function PopularArticles() {
  console.log(articlesData);
  return (
    <div>
      {articlesData.articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <img src={article.imagePath} alt={article.imagePath} />
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
}
