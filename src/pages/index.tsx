import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Header, Grid, Card, Icon, Image } from "semantic-ui-react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
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
            <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <Card.Group centered>
                    <Card>
                      <Image src="" wrapped ui={false} alt="coco" />
                      <Card.Content>
                        <Card.Header>Coco</Card.Header>
                        <Card.Meta>$20.00</Card.Meta>
                        <Card.Description>
                          Straight from Columbia. Chocolatey with hints of
                          canned peaches. <br />
                          <br />
                          <em>Available in 200g, 500g and 1kg sizes.</em>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
                <Grid.Column>Espresso 2</Grid.Column>
                <Grid.Column>Espresso 3</Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="product-category-container">
            <Header as="h3">Filter</Header>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
