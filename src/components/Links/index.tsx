import styles from "@/components/Links/Links.module.css";

export function Links({
  items,
  handleReduce,
}: {
  items: any;
  handleReduce: () => void;
}) {
  return (
    <div className={styles.list}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => (
        <div key={item.href} className={styles.item}>
          <a href={item.href} className={styles.link}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
