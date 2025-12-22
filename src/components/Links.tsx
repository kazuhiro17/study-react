import styles from "@/components/Links.module.css";

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

export function Links() {
  return (
    <ul className={styles.list}>
      {ITEMS.map((item) => (
        <li key={item.href} className={styles.item}>
          <a href={item.href} className={styles.link}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
