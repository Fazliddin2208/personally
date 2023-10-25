import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function VerticalArticleCard({ article }) {
    const locale = useSelector((state) => state.locale);
  return (
    <Link to={'/'} className="more-content__cards__card">
      <div className="more-content__cards__card__left">
        <h3>{locale === 'eng' ? article?.title_eng : locale === 'ru' ? article?.title_ru : article?.title_uz}</h3>
        <p>{locale === 'eng' ? article?.summary_eng : locale === 'ru' ? article?.summary_ru : article?.summary_uz}</p>
        <p>
          <span className="post-date">{article?.date}</span>
        </p>
      </div>
      <div className="more-content__cards__card__right">
        <img src={article?.imagePath} alt={article?.imagePath} />
      </div>
    </Link>
  );
}
