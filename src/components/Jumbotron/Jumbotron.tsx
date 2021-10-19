import { Container } from "semantic-ui-react";

const Jumbotron = () => (
  <Container>
    <video
      autoPlay
      loop
      muted
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "1080px",
      }}
    >
      <source src="/homepage-bg.mp4" type="video/mp4" />
    </video>
  </Container>
);

export default Jumbotron;
