import React, { useState } from "react";
import styles from "../../../styles/Header.module.css";
export default function Header({ setMode, mode }) {
  const onLigthMode = (e) => {
    if (e.target.checked === true) {
      setMode(true);
    }
    if (e.target.checked === false) {
      setMode(false);
    }
  };

  return (
    <div>
      <header className={mode === false ? styles.header : styles.header__light}>
        <div
          className={
            mode === false ? styles.header__title : styles.header__title__light
          }
        >
          <h1>Social Media Dashboard</h1>
          <h5>Total Followers: 23,004</h5>
        </div>
        <div className={styles.line}></div>
        <div
          className={
            mode === false
              ? styles.header__toggle
              : styles.header__toggle__light
          }
        >
          {mode === false ? <h4>Dark Mode</h4> : <h4>Light Mode</h4>}
          <label
            className={mode === false ? styles.switch : styles.switch__light}
          >
            <input type="checkbox" onChange={(e) => onLigthMode(e)} />
            <span
              className={mode === false ? styles.slider : styles.slider__light}
            ></span>
          </label>
        </div>
      </header>
    </div>
  );
}
