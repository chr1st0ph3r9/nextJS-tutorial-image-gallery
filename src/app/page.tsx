import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h2>welcome to home</h2>
        <button>click</button>
      </section>
    </main>
  );
}
