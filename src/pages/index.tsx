import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>caffè</title>
        <meta name="homepage" content="caffè store page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className="jumbotron">
          <h2>We Love Coffee</h2>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
