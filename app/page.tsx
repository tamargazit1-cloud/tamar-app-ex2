import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Welcome to the Product Jam Starter Kit</h2>
        <p className={styles.subtitle}>
          Feel free to look around, edit the source code and navigate to the
          demos.
        </p>
        <div className={styles.logos}>
          <Image
            src="/huji.svg"
            alt="HUJI Logo"
            width="80"
            height="80"
            priority
          />
          <Image
            src="/bezalel.svg"
            alt="Bezalel Logo"
            className="item"
            width="80"
            height="80"
            priority
          />
        </div>
        <div className={styles.linksSection}>
          <h3 className={styles.linksTitle}>Explore Projects</h3>
          <div className={styles.linksGrid}>
            <Link href="/tic-tac-toe" className={styles.card}>
              <h4>🎮 Tic Tac Toe</h4>
              <p>Play a classic game of Tic Tac Toe</p>
            </Link>
            <Link href="/art" className={styles.card}>
              <h4>🎨 Art Gallery</h4>
              <p>Browse art from The Met Museum</p>
            </Link>
            <Link href="/design" className={styles.card}>
              <h4>📐 Design Doc</h4>
              <p>תיבת אוצר - Museum Management System</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
