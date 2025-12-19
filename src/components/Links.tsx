import styles from "@/components/Links.module.css";

export function Links() {
  return (
    <p className={styles.description}>
      Looking for a starting point or more instructions? Head over to{" "}
      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className={styles.link}
      >
        Templates
      </a>{" "}
      or the{" "}
      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className={styles.link}
      >
        Learning
      </a>{" "}
      center.
    </p>
  );
}
