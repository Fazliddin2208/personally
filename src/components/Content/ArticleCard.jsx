import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleCard({ article, index }) {
  const locale = useSelector((state) => state.locale);
  return (
    <Link to={"/"} className="article-cards__card">
      <div className="article-cards__card__header">
        <img src={article?.imagePath} alt={article.imagePath} />
      </div>
      <div className="article-cards__card__body">
        <h3>{locale === 'eng' ? article.title_eng : locale === 'ru' ? article.title_ru : article.title_uz}</h3>
        <p>{locale === 'eng' ? article.summary_eng : locale === 'ru' ? article.summary_ru : article.summary_uz}</p>
        <p>
          <span className="post-date">{article.date}</span>
        </p>
      </div>
    </Link>
  );
}
