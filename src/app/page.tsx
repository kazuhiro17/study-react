"use client";

import { Main } from "@/components/Main";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightblue } from "@/hooks/useBgLightblue";
import styles from "@/app/page.module.css";



export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightblue();

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
      <button className={styles.button} onClick={handleAdd}>
        追加
      </button>
      <ul>
        {array.map((item) => {
          return (
            <li className={styles.item} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <Main page="Index" />
    </>
  );
}
