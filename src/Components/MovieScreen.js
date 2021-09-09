import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export const MovieScreen = ({movies}) => {
    const params = useParams();
    console.log(params);
    let movie = movies.find((el) => el.id == params.id);
    console.log(movie);
    return (
        <div>
            <Container>
                <Row style={{ margingTop: "100px" }}>
                    <Col>
                        {""}
                        <img style={{ width: "100%"}} src={movie.posterurl} alt='frfr'/>
                    </Col>
                    <Col>
                        {""}
                        <h1>{movie.name}</h1>
                        <p>{movie.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
