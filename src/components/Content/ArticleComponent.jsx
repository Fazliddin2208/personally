import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ArticleComponent({ article, locale }) {
  const navigate = useNavigate();
  const backToUrl = () => {
    navigate(-1);
  };
  return (
    <div className="article-oneArticle">
      <p className="article-oneArticle__back" onClick={backToUrl}>
        <FontAwesomeIcon icon={faAngleLeft} /> {locale === 'eng' ? 'Back' : locale === 'ru' ? 'Назад' : 'Orqaga'}
      </p>
      <h2>
        {locale === "eng"
          ? article?.title_eng
          : locale === "ru"
          ? article?.title_ru
          : article?.title_uz}
      </h2>
      <img src={article?.imagePath} alt="image foto" />
      <b>
        {locale === "eng"
          ? article?.summary_eng
          : locale === "ru"
          ? article?.summary_ru
          : article?.summary_uz}
      </b>
      <p>
        <span className="post-date">{article?.date}</span>
      </p>
      <p>
        {locale === "eng"
          ? article?.description_eng
          : locale === "ru"
          ? article?.description_ru
          : article?.description_uz}
      </p>
    </div>
  );
}
