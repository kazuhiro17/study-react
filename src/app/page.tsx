"use client";

import { Main } from "@/components/Main";
import { useCallback } from "react";

export default function Home() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log((e.target as HTMLAnchorElement).href);
    e.preventDefault();
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
