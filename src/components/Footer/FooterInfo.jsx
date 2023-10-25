import React from "react";
import db from "./../../data/headers.json";
import { useSelector } from "react-redux";

export default function FooterInfo() {
  const locale = useSelector((state) => state.locale);
  return (
    <div className="footer-content__info">
      <h2>
        {locale === "eng"
          ? db?.data?.title_eng
          : locale === "ru"
          ? db?.data?.title_ru
          : db?.data?.title_uz}
      </h2>
      <p>
        {locale === "eng"
          ? db?.data?.description_eng
          : locale === "ru"
          ? db?.data?.description_ru
          : db?.data?.description_uz}
      </p>
    </div>
  );
}
