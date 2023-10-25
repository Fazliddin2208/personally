import React from "react";
import HeaderTop from "../components/Header/HeaderTop";
import Footer from "../components/Footer/Footer";
import Person from "./../assets/images/alisher.png";
import db from "./../data/headers.json";
import { useSelector } from "react-redux";

export default function About() {
  const locale = useSelector((state) => state.locale);
  return (
    <>
      <HeaderTop />
      <div className="about">
        <img src={Person} alt="Alisher" />
        <h2>{locale === 'eng' ? db?.data?.title_eng : locale === 'ru' ? db?.data?.title_ru : db?.data?.title_uz}</h2>
        <p>{locale === 'eng' ? db?.data?.about_eng : locale === 'ru' ? db?.data?.about_ru : db?.data?.about_uz}</p>
      </div>
      <Footer />
    </>
  );
}
