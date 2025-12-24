"use client";

import { Main } from "@/components/Main";
import { useCallback, useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <h1 className={styles.heading}>{count}</h1>
      <button className={styles.button} onClick={handleClick}>
        ボタン
      </button>
      <Main page="Index" />
    </>
  );
}
