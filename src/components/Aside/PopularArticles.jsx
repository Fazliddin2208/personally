import React, { useEffect, useState } from "react";
import articlesData from "../../data/articles.json";
import { Link } from "react-router-dom";

export default function PopularArticles({ locale }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articles = [];
    articlesData?.articles?.map((item, index) => {
      if (articlesData?.articles?.length >= 5) {
        if (index < 5) {
          articles.push(item);
        }
      } else {
        articles.push(item);
      }
    });
    setArticles(articles);
  }, []);

  return (
    <div className="aside-popular">
      <h3>
        {locale === "eng"
          ? "Popular articles"
          : locale === "ru"
          ? "Популярные статьи"
          : "Mashhur maqolalar"}
      </h3>

      <div className="aside-popular__cards">
        {articles?.map((article, index) => (
          <div key={index} className="aside-popular__cards__card">
            <Link to={"/"}>
              <p>
                {locale === "eng"
                  ? article?.title_eng
                  : locale === "ru"
                  ? article?.title_ru
                  : article?.title_uz}
              </p>
            </Link>
            <p>
              <span className="post-date">{article?.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
