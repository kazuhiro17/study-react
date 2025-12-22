"use client";

import { Main } from "@/components/Main";
import { useCallback, useEffect } from "react";

export default function Home() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log((e.target as HTMLAnchorElement).href);
    e.preventDefault();
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="Index" />
    </>
  );
}
