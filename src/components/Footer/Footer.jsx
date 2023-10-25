import React from "react";
import FooterInfo from "./FooterInfo";
import SendMessage from "../SendMessage";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-content">
      <FooterInfo />
      {window?.innerWidth > 700 && <SendMessage classes={window?.innerWidth > 900 ? "message" : "message center"} />}
      
    </div>
  );
}
