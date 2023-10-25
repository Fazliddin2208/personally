import React from "react";
import { useSelector } from "react-redux";

export default function SendMessage({ classes }) {
  const locale = useSelector((state) => state.locale);
  return (
    <div className={classes ? classes : "message"}>
      <h3>
        {locale === "eng"
          ? "Leave message"
          : locale === "ru"
          ? "Оставить сообщение"
          : "Xabar qoldirish"}
      </h3>
      <p>
        {locale === "eng"
          ? "You have the opportunity to express your thoughts and relations to Alisher Rustamov!"
          : locale === "ru"
          ? "У Вас есть возможность выразить свои мысли и отношение к Алишеру Рустамову!"
          : "Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!"}
      </p>
      <div className="message__input">
        <input
          type="text"
          placeholder={
            locale === "eng"
              ? "Leave message"
              : locale === "ru"
              ? "Оставить сообщение"
              : "Xabar qoldirish"
          }
        />
        <button>
          {locale === "eng"
            ? "Send"
            : locale === "ru"
            ? "Отправить"
            : "Yuborish"}
        </button>
      </div>
    </div>
  );
}
