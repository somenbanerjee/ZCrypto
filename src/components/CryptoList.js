import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() =>{
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100cy=USD")
        .then(response => {
            setCryptos(response.data.coins);
        })
        .catch(error => console.error(error));
    }, []);
    
    return(
        <Container className="mt-4">
            <Row>
                <Col>
                    <h4 className="display-6 mb-5 mt-5">Current Stats</h4>
                </Col>
            </Row>
            <Row>
                <Col className="search mb-4">
                    <Form.Control 
                    type="text" 
                    className="form-control" 
                    placeholder="Search for specific currency"
                    onChange={ (event) =>{
                        setSearch(event.target.value);
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col className="table-responsive">
                    <Table bordered className="lead">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Market Cap</th>
                                <th>Daily Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cryptos
                                .filter((value) => {
                                return value.name.toLowerCase().includes(search.toLowerCase());
                                })
                                .map(crypto => {
                                    return(
                                        <tr key={ crypto.id }>
                                            <td>
                                                <img src={ crypto.icon } width={26} alt={ crypto.name } /> { crypto.name }
                                            </td>
                                            <td>$ { crypto.price.toFixed(2) }</td>
                                            <td>$ { crypto.volume }</td>
                                            <td className={ crypto.priceChange1d > 0 ? 'text-success' : 'text-danger' }>₹ { crypto.priceChange1d }</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
