import React from "react";
import ContentFirst from "./ContentFirst";
import ContentMore from "./ContentMore";
import "./article.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ContentData() {
  const locale = useSelector((state) => state.locale);
  return (
    <div className="content-data">
      <ContentFirst />
      <ContentMore />
      <Link to={"/articles"} className="more-btn">
        {locale === 'eng' ? 'More articles' : locale === 'ru' ? 'Более cтатьи' : "Ko'proq maqolalar"}
      </Link>
    </div>
  );
}
