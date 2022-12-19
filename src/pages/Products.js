
import './App.css';
import { Box } from '@chakra-ui/react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
function Products() {
  return (
    <>
    <SEO title={"Products"}/>
    <Navbar/>
    <Box w='30%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
    </>
  );
}

export default Products;