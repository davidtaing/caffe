import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProductRecommendations from "../components/ProductRecommendations/ProductRecommendations";
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

      <main>
        <Navbar />
        <Jumbotron />
        <ProductRecommendations />
      </main>
    </div>
  );
};

export default Home;
