import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return(
        <Container fluid className="footer text-center text-light pt-4 pb-4">
            <Row>
                <Col>
                   Somen Banerjee [<a href="https://www.linkedin.com/in/somenbanerjee/">Linkedin</a>]
                </Col>
            </Row>
        </Container>
    )
}