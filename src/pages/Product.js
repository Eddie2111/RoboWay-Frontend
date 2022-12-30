import { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import React from "react";
import { Card, CardBody, CardFooter,Text } from '@chakra-ui/react';
import {motion} from 'framer-motion';
import { Backend } from './components/backend/api';
import Footer from './components/Footer';

function Product() {
    const [searchParams] = useSearchParams();
    const [ dataset, setDataset ] = useState({});
    const [ features, setFeatures ] = useState([]);
    const navigate = useNavigate();
    if(searchParams.get("id") === null){
        navigate('/products');
    }
    useEffect(() => {
        const getData = searchParams.get("id");
        const postData = {name: getData.toString()};
        axios.post(Backend+'helmet',postData, { withCredentials: true })
          .then((response) => {
            setDataset(response.data)
            setFeatures(response.data.features)
        });
      }, []);
 
    const title = "Product: "+dataset.name;
    console.log(dataset);
    console.log(features);
    setInterval(function () {}, 5000);
  return (
    <>
    <SEO title={title}/>
    <Navbar/>
    <div className="container">
        <Box align={"center"}>
            <Heading as='h2' size='2xl'>
                {dataset.name} 
            </Heading>
            
            <Text fontSize='3xl' as='em'>
                For: {dataset.purpose}
            </Text>
        </Box>

        <img className="productImg" src={dataset.img} alt=""/>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card align='center'>
                <CardBody>
                    <Text fontSize="2xl">{dataset.description}</Text>
                </CardBody>
                <CardFooter>
                    
                </CardFooter>
                </Card>
            </motion.div>
    <table className="table table1">
    <thead>
        <tr>
        <th className="thead" scope="col">Features</th>
        </tr>
    </thead>
    <tbody>
    { features.map((item) => {
            return (
                <tr className="td">
                    <td>{item}</td>
                </tr>
            )
        })
        }
    </tbody>
        </table>

            </div>
        
    </div>
    
    <Footer/>
    </>
  );
}

export default Product;
