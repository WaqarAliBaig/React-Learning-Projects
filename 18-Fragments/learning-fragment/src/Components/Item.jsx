import React from "react";
import styles from "./Item.module.css";

const Item = ({ foodItem, bought, onClickHandle }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-secondary`}
        onClick={onClickHandle}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
