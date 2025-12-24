"use client";

import { Main } from "@/components/Main";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {

  const [count, setCount] = useState(1);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount (count => count + 1);
    setCount (count => count + 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);


  return (
    <>
    <h1 className={styles.heading}>{count}</h1>
      <button className={styles.button} onClick={handleClick}>ボタン</button>
      <Main page="Index" />
    </>
  );
}
