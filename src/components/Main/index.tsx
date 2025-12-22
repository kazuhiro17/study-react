import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import styles from "@/components/Main/Main.module.css";

export function Main(props: { page: string }) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <p>Hello {props.page} Page</p>
      </Headline>
      <Links />
    </main>
  );
}
