import { Container, Row, Col } from "react-bootstrap";


export default function MovieDetails(props){
    const movie = props.movie;
    return (
        <>
        <Container>
        <Row>
            {movie.poster ?
                <Col md><img src={movie.poster} alt="poster" className="w-100"/><br/><br/></Col>
                :
                <Col md>No poster available</Col>
            }
            <Col md>
                <strong>Directed By: </strong>{movie.directors ? movie.directors.join(', ') : 'N/A'}<br/><br/>
                <p>{movie.fullplot ? movie.fullplot : 'N/A'}</p>
                <strong>Cast: </strong>{movie.cast ? movie.cast.join(', ') : 'N/A'}<br/><br/>
                <strong>Awards: </strong>{movie.awards ? movie.awards.text : 'N/A'}<br/>
                <strong>IMDB Rating: </strong>{movie.imdb ? movie.imdb.rating : 'N/A'}({movie.imdb ? movie.imdb.votes : 'N/A'} votes)
            </Col>
        </Row>
        </Container>
        </>
    );
}