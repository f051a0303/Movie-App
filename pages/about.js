import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";


export function getStaticProps(){

    var movieId = "573a139bf29313caabcf3d23";  // The matrix
    
    return new Promise((resolve, reject)=>{
        fetch(`https://puzzled-pink-snapper.cyclic.app/api/movies/` + movieId)
        .then(res=>res.json()).then((data)=>{
            resolve({props:{movie:data}});
        });
    });
}


export default function About(props){
    return (
        <div>
            <PageHeader text="About the Developer: Chi Ming Lai"/>
            <Card className="bg-light">
                <Card.Body>
                    <p>The Matrix is my favourite, I am always obessed with those sci-fi movies, so that&apos;s why I choose matrix as my favourite.</p>
                    <p>Next time I may consider the avengers too, but not this time  because superhero movie is not always the top of my list.</p>
                    <p>Click <Link href="/movies/The Matrix">HERE</Link> to learn more about the movie</p>
                </Card.Body>
                <MovieDetails movie={props.movie}/>
            </Card>
        </div>

    );
}