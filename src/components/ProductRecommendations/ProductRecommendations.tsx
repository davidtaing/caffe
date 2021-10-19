import { Segment, Header, Card } from "semantic-ui-react";
import ProductCard from "../ProductCard/ProductCard";

const ProductRecommendations = () => (
  <Segment.Group>
    <div className="product-recommendations">
      <Segment>
        <div className="recommendation-heading">
          <Header as="h2" textAlign="center">
            How do you like your coffee?
          </Header>
        </div>
      </Segment>
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
  </Segment.Group>
);

export default ProductRecommendations;
