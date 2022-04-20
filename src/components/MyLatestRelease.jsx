
import { Row, Col, Card } from "react-bootstrap";
import collection from "../data/books.json";

const MyLatestRelease = () => (
    
            <div>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            {collection.map((novel) => (
                                <Card key={novel.asin}>
                                    <Card.Img variant="top" src={novel.img} />
                                    <Card.Body>
                                        <Card.Title>{novel.title}</Card.Title>
                                        <Card.Text>{novel.price}</Card.Text>
                                        <p>{novel.category}</p>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    ))}
                </Row>
            </div>
  
)

export default MyLatestRelease;
