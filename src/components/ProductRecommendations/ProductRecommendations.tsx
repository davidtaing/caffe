import { Segment, Header, Card } from "semantic-ui-react";
import ProductCard from "../ProductCard/ProductCard";

const ProductRecommendations = () => (
  <div className="product-recommendations">
    <div className="recommendation-heading">
      <Header as="h2" textAlign="center">
        How do you like your coffee?
      </Header>
    </div>
    <Segment>
      <div className="product-category-container">
        <Header as="h2" textAlign="center">
          Espresso
        </Header>
        <Card.Group centered doubling>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Card.Group>
      </div>
    </Segment>
    <Segment>
      <div className="product-category-container">
        <Header as="h2" textAlign="center">
          Filter
        </Header>
        <Card.Group centered>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Card.Group>
      </div>
    </Segment>
  </div>
);

export default ProductRecommendations;