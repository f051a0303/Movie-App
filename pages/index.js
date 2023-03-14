/**********************************************************************************  
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * Name: ____Chi Ming Lai__________ Student ID: ____158400200_____ Date: _____11 Oct 2022___________
 * **********************************************************************************/ 
import useSWR from 'swr';
import {useState, useEffect} from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

export default function Home() {
  // useState value
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const {data, error} = useSWR(`https://delightful-ant-waistcoat.cyclic.app/api/movies/?page=${page}&perPage=10`);
  
  useEffect(()=>{
    if(data){
      setPageData(data);
    }
    
  }, [data]);

  function previous(e){
    if(page > 1){
      setPage(page - 1);
    }
  }

  function next(e){
    setPage(page + 1);
  }
  

  return (
    <>
      <PageHeader text="Film Collection: Sorted by Date"/>
      
      <Accordion defaultActiveKey="0">
      {pageData.map((pageData)=>(
      <Accordion.Item eventKey={pageData._id} key={pageData._id}>
        <Accordion.Header><strong>{pageData.title ? pageData.title : 'N/A'}</strong> ({pageData.year ? pageData.year+': ' : 'N/A'} Directed By {pageData.directors ? pageData.directors.join(', ') : 'N/A'})</Accordion.Header>
        <Accordion.Body>
          <MovieDetails movie={pageData}/>
        </Accordion.Body>
      </Accordion.Item>
      ))
      }
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={e=>{previous(e)}}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={e=>{next(e)}}/>
      </Pagination>
    
    </>
  );
}
