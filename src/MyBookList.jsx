import {
  Row,
  Col,
  ButtonGroup,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Component } from "react";
import fantasy from "../src/json/fantasy.json";
import horror from "../src/json/horror.json";
import history from "../src/json/history.json";
import scifi from "../src/json/scifi.json";
import romance from "../src/json/romance.json";
import MySingleBook from "./MySingleBook";

class MyBookList extends Component {
  state = {
    selectedBook: fantasy,
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    this.setState({
                      selectedBook: fantasy,
                    })
                  }
                >
                  Fantasy
                </Button>
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    this.setState({
                      selectedBook: horror,
                    })
                  }
                >
                  Horror
                </Button>
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    this.setState({
                      selectedBook: history,
                    })
                  }
                >
                  History
                </Button>
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    this.setState({
                      selectedBook: scifi,
                    })
                  }
                >
                  Scifi
                </Button>
                <Button
                  variant="secondary"
                  onClick={(e) =>
                    this.setState({
                      selectedBook: romance,
                    })
                  }
                >
                  Romance
                </Button>
              </ButtonGroup>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="bookTitle"
                >
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il titolo del libro"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row xs={1} md={3} lg={5} className="gy-5">
            {this.state.selectedBook.map((book) => {
              return (
                <Col>
                  <MySingleBook
                    img={book.img}
                    title={book.title}
                    category={book.category}
                    price={book.price}
                    key={`book-${book.asin}`}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default MyBookList;
