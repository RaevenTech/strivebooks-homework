import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { Row, Col, Card } from "react-bootstrap";

function App() {
    return (
        <section>
            <div>
                <MyNavbar payoff="StriveBooks" />
            </div>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <MyFooter copyright="copyright infomation does here" />
            </div>
        </section>
    );
}

export default App;
