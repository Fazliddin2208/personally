import React from "react";
import articlesData from "../data/articles.json";
import ArticleCard from "../components/Content/ArticleCard";
import HeaderTop from "../components/Header/HeaderTop";
import Footer from "../components/Footer/Footer";

export default function AllArticles() {
  return (
    <>
      <HeaderTop />
      <div className="all-articles">
        <h2>All Articles</h2>
        <div className="all-articles__wrapper">
          {articlesData?.articles?.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
