import Image from "next/image";
import styles from "../styles/hello.module.css";


export default function Home() {
    return (
        <main className={styles.main}>
            <section>
                <h2>welcome to hello</h2>
                <button>click</button>
            </section>
        </main>
    );
}