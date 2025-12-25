"use client";

import { Main } from "@/components/Main";
import { useCallback, useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <>
      {isShow ? <h1 className={styles.heading}>{count}</h1> : null}
      <button className={styles.button} onClick={handleClick}>
        ボタン
      </button>
      <button className={styles.button} onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>
      <input
        type="text"
        className={styles.input}
        value={text}
        onChange={handleChange}
      />
      <Main page="Index" />
    </>
  );
}
