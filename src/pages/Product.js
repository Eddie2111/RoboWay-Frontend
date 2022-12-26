import './App.css';
import { Box } from '@chakra-ui/react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Product() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    try{
        const getData = searchParams.get("id");
        const data = {name: getData.toString()};
        console.log(data);
        axios.post('http://localhost:3001/helmet',data, { withCredentials: true })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
            navigate('/products');
        });
    }
    catch(err){
        navigate('/products');
    }

  return (
    <>
    <SEO title={"Product"}/>
    <Navbar/>
    <Box w='30%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
    </>
  );
}

export default Product;