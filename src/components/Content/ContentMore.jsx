import React, { useEffect, useState } from "react";
import articlesData from "../../data/articles.json";
import VerticalArticleCard from "./VerticalArticleCard";

export default function ContentMore() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articles = [];
    articlesData?.articles?.map((item, index) => {
      if (articlesData?.articles?.length >= 4) {
        if (index >= 3) {
          articles.push(item);
        }
      }else{
        articles.push(item);
      }
    });
    setArticles(articles);
  }, []);

  return (
    <div className="more-content">
      <div className="more-content__header">
        <iframe
          src="https://www.youtube.com/embed/bS5Y-9yOjcA"
          title="Foydali uchrashuv: Sherzod Kayumov 2 | Alisher Rustamov"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="more-content__cards">
        {articles?.map((article, index)=>(
          <VerticalArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
