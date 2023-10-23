import React from "react";
import Person from "./../../assets/images/alisher.png";
import db from "./../../data/headers.json";
import { useSelector } from "react-redux";

export default function HeaderData() {
  const locale = useSelector((state) => state.locale);

  return (
    <div className="header-data">
      <div className="header-data__left">
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
        <button className="button">
          {locale === "eng"
            ? db?.data?.button_eng
            : locale === "ru"
            ? db?.data?.button_ru
            : db?.data?.button_uz}
        </button>
      </div>
      <div className="header-data__right">
        <img src={Person} alt="person foto" />
      </div>
    </div>
  );
}
