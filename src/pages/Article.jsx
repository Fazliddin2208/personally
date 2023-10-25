import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderTop from "../components/Header/HeaderTop";
import Footer from "../components/Footer/Footer";
import articlesData from "./../data/articles.json";
import ArticleComponent from "../components/Content/ArticleComponent";
import { useSelector } from "react-redux";

export default function Article() {
  const locale = useSelector((state) => state.locale);
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    articlesData?.articles?.map((item) => {
      if (item?.id == id) {
        setArticle(item);
      }
    });
  }, []);

  return (
    <>
      <HeaderTop />
      <div className="one-article">
        <ArticleComponent article={article} locale={locale} />
      </div>
      <Footer />
    </>
  );
}
