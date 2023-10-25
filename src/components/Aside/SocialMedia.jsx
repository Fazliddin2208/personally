import {
  faFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SocialMedia({ locale }) {
  return (
    <div className="aside-socials">
      <h3>
        {locale === "eng"
          ? "Social media"
          : locale === "ru"
          ? "Социальные сети"
          : "Ijtimoiy tarmoqlar"}
      </h3>
      <div className="aside-socials__links">
        <a href="https://instagram.com" target="_blank" className="post-date">
          <FontAwesomeIcon icon={faFacebook} />
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" className="post-date">
          <FontAwesomeIcon icon={faTelegram} />
          Telegram
        </a>
        <a href="https://instagram.com" target="_blank" className="post-date">
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
        <a href="https://instagram.com" target="_blank" className="post-date">
          <FontAwesomeIcon icon={faYoutube} />
          Youtube
        </a>
      </div>
    </div>
  );
}
