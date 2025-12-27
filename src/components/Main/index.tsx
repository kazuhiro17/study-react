import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import styles from "@/components/Main/Main.module.css";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Templates",
    description: "Find the perfect template for your next project",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learning",
    description: "Learn how to use Next.js",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Documentation",
    description: "Learn how to use Next.js",
  },
  {
    href: "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Linking and Navigating",
    description: "Learn how to link and navigate between pages",
  },
];

export function Main(props: { page: string }) {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <p>アイテムの数は{items.length}です</p>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
