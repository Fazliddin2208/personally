import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/Logo.png";
import db from "./../../data/headers.json";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "../../redux/actions/localeActions";

export default function HeaderTop() {
  const dispatch = useDispatch();

  const [langOpen, setLangOpen] = useState(false);
  const handleLangOpen = () => {
    setLangOpen(!langOpen);
  };

  const handleLangClose = () => {
    setLangOpen(false);
  };

  const pickLang = (e) => {
    dispatch(setLocale(e));
  };

  const locale = useSelector((state) => state.locale);

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header-top">
      <div className="header-top__left">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <FontAwesomeIcon
        onClick={handleOpenMenu}
        className={openMenu ? "header-top__bars active" : "header-top__bars"}
        icon={!openMenu ? faBars : faXmark}
      />

      <div
        className={openMenu ? "header-top__right active" : "header-top__right"}
      >
        <ul>
          {db?.top?.links?.map((link) => (
            <li key={link?.id}>
              <Link to={link?.url}>
                {locale === "eng"
                  ? link?.link_eng
                  : locale === "ru"
                  ? link?.link_ru
                  : link?.link_uz}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-top__action">
          <p onClick={handleLangOpen} className={langOpen ? "active" : ""}>
            {locale === "eng"
              ? "English"
              : locale === "ru"
              ? "Русский"
              : "O'zbek"}
            <FontAwesomeIcon icon={faAngleDown} />
          </p>
          <div
            className={
              langOpen
                ? "header-top__lang-modal"
                : "header-top__lang-modal hidden"
            }
          >
            {db?.top?.langs?.map((lang) => (
              <p
                onClick={() => {
                  pickLang(lang?.value);
                  // getLocale();
                  handleLangClose();
                }}
                key={lang?.id}
              >
                <img src={lang?.icon} alt="img" />
                {lang?.lang}
              </p>
            ))}
          </div>
          <button className="button">
            {locale === "eng"
              ? "Leave a message"
              : locale === "ru"
              ? "Оставить сообщение"
              : "Xabar qoldirish"}
          </button>
        </div>
      </div>
    </header>
  );
}
