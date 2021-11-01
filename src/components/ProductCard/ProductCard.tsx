import { Card, Image } from "semantic-ui-react";

const ProductCard = () => (
  <Card>
    <Image
      src="/products/sample-product-card.jpg"
      wrapped
      ui={false}
      alt="coco"
    />
    <Card.Content>
      <Card.Header>Coco</Card.Header>
      <Card.Meta>$20.00</Card.Meta>
      <Card.Description>
        Chocolatey with hints of canned peaches. <br />
        <br />
        <em>Available in 200g, 500g and 1kg sizes.</em>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default ProductCard;
