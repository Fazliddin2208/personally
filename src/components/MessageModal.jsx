import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MessageModal({ open, onClose, locale }) {
  return (
    <form className={open ? "modal-wrapper active" : "modal-wrapper"}>
      <div className="modal-wrapper__message">
        <div className="modal-wrapper__message__top">
          <h3>{locale === 'eng' ? 'Write your message' : locale === 'ru' ? 'Напишите сообщение' : 'Xabaringizni qoldiring'}</h3>
          <FontAwesomeIcon icon={faXmark} onClick={onClose} />
        </div>
        <div className="modal-wrapper__message__body">
          <input type="email" placeholder="your email..." required />
          <textarea placeholder="your text" required />
          <button className="button">{locale === 'eng' ? 'Send' : locale === 'ru' ? 'Отправить' : 'Yuborish'}</button>
        </div>
      </div>
    </form>
  );
}
