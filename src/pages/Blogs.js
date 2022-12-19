
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
function Blogs() {
  return (
    <>
    <SEO title={"Blogs"}/>
    <Navbar/>
    <Box w='100%' h='300px' bgGradient='linear(to-l, #612af7 10%, #a94dff 90%)' />
    </>
  );
}

export default Blogs;