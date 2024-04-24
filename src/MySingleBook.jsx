import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const MySingleBook = (props) => {
  return (
    <>
      <Card key={`book-${props.asin}`} className="my-3">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Categoria:
            {props.category}
          </Card.Text>
          <Badge bg="light" text="dark">
            {props.price}€
          </Badge>
        </Card.Body>
      </Card>
    </>
  );
};
export default MySingleBook;
