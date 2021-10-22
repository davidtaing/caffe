import { Container, Menu, Header } from "semantic-ui-react";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <Menu fixed="top" className={styles.navbar}>
    <Container>
      <Menu.Header href="/" className={styles.title}>
        <Header as="h1">caffè</Header>
      </Menu.Header>
      <Menu.Menu position="right">
        <Menu.Item href="/shop">Shop</Menu.Item>
        <Menu.Item href="/login">Login</Menu.Item>
        <Menu.Item href="/register">Register</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Navbar;
