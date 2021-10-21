import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProductRecommendations from "../components/ProductRecommendations/ProductRecommendations";

const Home: NextPage = () => {
  return (
    <div className="homepage">
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
