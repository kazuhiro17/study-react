"use client";

import { Main } from "@/components/Main";
import { useCallback, useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在しています");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
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
        name="text"
        type="text"
        className={styles.input}
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li className={styles.item} key={item}>{item}</li>;
        })}
      </ul>
      <Main page="Index" />
    </>
  );
}
