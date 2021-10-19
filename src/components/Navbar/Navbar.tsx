import { Menu, Header } from "semantic-ui-react";

const Navbar = () => (
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
);

export default Navbar;
