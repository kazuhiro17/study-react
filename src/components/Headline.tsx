import styles from "@/components/Headline.module.css";

export function Headline(props: { page: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className={styles.heading}>{props.page} Page</h1>
      {props.children}
    </div>
  );
}
