import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Header, Grid, Card } from "semantic-ui-react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProductCard from "../components/ProductCard/ProductCard";
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
        <div className="product-recommendations">
          <div className="recommendation-heading">
            <Header as="h2">How do you like your coffee?</Header>
          </div>
          <div className="product-category-container">
            <Header as="h3">Espresso</Header>
            <Card.Group centered>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Card.Group>
          </div>
          <div className="product-category-container">
            <Header as="h3">Filter</Header>
            <Card.Group centered>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Card.Group>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
