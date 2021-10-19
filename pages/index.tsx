import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Menu, Header } from "semantic-ui-react";
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
        <Menu fixed="top">
          <Menu.Header href="/">
            <Header as="h1">caffè</Header>
          </Menu.Header>
          <Menu.Menu position="right">
            <Menu.Item href="/shop">Shop</Menu.Item>
            <Menu.Item href="/login">Login</Menu.Item>
            <Menu.Item href="/register">Register</Menu.Item>
          </Menu.Menu>
        </Menu>

        <div className="jumbotron">
          <h2>We Love Coffee</h2>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
