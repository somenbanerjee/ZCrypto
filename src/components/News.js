import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/news/trending?skip=0&limit=3")
        .then(response => {
            setNews(response.data.news);
        })
        .catch(error => console.log(error));
    }, []);

    return(
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                    <h4  className="display-6 mb-4 mt-1">Trending News</h4>
                </Col>
            </Row>
            <Row>
                {
                    news.map(n => {
                        return(
                            <Col md={4} className="card-container"  key={n.id}>
                                <a href={ n.link } target="_blank">
                                    <Card className="card">
                                        <Card.Img variant="top" src={n.imgURL} alt={n.id}/>
                                        <Card.Body className="card-body">
                                            <Card.Title>{ n.title }</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted lead">
                                                <small>Source : { n.source }</small>
                                            </Card.Subtitle>
                                            <Card.Text>{ he.decode(n.description.substring(0, n.description.length) ) }</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}