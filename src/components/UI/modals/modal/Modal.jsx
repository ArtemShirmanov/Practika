import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import OutlineButton from "../../buttons/outlineButton/OutlineButton";

const Modal = ({
  isFilterOpen = false,
  setIsFilterOpen,
  children,
  title,
  style = "right",
  animationEnabled = true,
  animationTime,
  save,
}) => {
  const [modalAnimation, setModalAnimation] = useState("open");

  useEffect(() => {
    if (isFilterOpen) {
      setModalAnimation("open");
    } else {
      setModalAnimation("close");
    }
  }, [isFilterOpen]);

  function close() {
    setModalAnimation("close");
    setTimeout(() => {
      setIsFilterOpen(false);
    }, animationTime || 400); // Мин. 0.1
  }

  const modalClass = animationEnabled
    ? `${styles.modal} ${styles[modalAnimation]}`
    : styles.modal;

  return (
    <div className={`${styles.modalOverlay} ${styles[style]}`}>
      <div className={modalClass}>
        <span className={styles.modal__title}>{title || "Title"}</span>
        {children}
        <div className={styles.modal__buttons}>
          <OutlineButton
            style={{ color: "#ffffff", background: "#3066be" }}
            onClick={() => {
              save();
            }}
          >
            Сохранить
          </OutlineButton>
          <OutlineButton
            onClick={() => {
              close();
            }}
          >
            Закрыть
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
