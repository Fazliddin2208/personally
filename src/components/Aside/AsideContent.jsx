import React from "react";
import PopularArticles from "./PopularArticles";
import SocialMedia from "./SocialMedia";
import "./aside.scss";
import { useSelector } from "react-redux";
import SendMessage from "../SendMessage";

export default function AsideContent() {
  const locale = useSelector((state) => state.locale);
  return (
    <div className="aside">
      {window?.innerWidth > 700 ? (
        <PopularArticles locale={locale} />
      ) : (
        <SendMessage classes="message center black" />
      )}
      <SocialMedia locale={locale} />
    </div>
  );
}
