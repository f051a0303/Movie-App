import {useRouter} from 'next/router';
import useSWR from 'swr';
import MovieDetails from '../../components/MovieDetails';
import Error from 'next/error';
import PageHeader from '../../components/PageHeader';

export default function Movie(){
    const router = useRouter();
    const {title} = router.query;
    const {data, error} = useSWR(`https://delightful-ant-waistcoat.cyclic.app/api/movies/?page=1&perPage=10&title=${title}`);

        
    if(!data){
        return null;
    }
    if(!data.length){
        return (
            <>
                <Error statusCode={404}></Error>
            </>
        )
    }
    return (
        <>
            {data.map((data)=>(
                <div key={data._id}>
                    <PageHeader text={data?.title}></PageHeader>
                    <MovieDetails movie={data}></MovieDetails>
                </div>
            ))}
        </>
    )
}