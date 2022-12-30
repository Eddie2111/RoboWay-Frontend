import { Card, CardBody, CardFooter, Heading,Box,
         CardHeader, Text, SimpleGrid, GridItem
    } from '@chakra-ui/react';
import {motion} from 'framer-motion';
import HeadCard from './HeadCard';
import {MdEngineering} from 'react-icons/md';
import {GiSellCard} from 'react-icons/gi';
import {GiArchiveResearch} from 'react-icons/gi';

const SectionAnav = ()=>{
    return (
<>
<div className="container">
<motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
<Card align='center'>
  <CardHeader>
    <Heading size='lg'> What We Do</Heading>
  </CardHeader>
  <CardBody>
    <Text fontSize={"lg"}>Our primary concern is to find a solution using Robotics and Automation.</Text>
  </CardBody>
  <br/><br/>
  <CardFooter>
        <SimpleGrid columns={[1, null, 3]} spacing='120px'>
        <Box height='60px'>
            <Heading size='md'>Provide Personal and Industrial Safety Solutions.</Heading>
        </Box>
        <Box height='60px'>
            <Heading size='md'>Provide Academics and Corporate Automation.</Heading>
        </Box>
        <Box height='60px'>
            <Heading size='md'>Professional Software and Hardware Based Projects.</Heading>
        </Box>
        </SimpleGrid>
  </CardFooter>
  <br/><br/>
  <Text><a class="btn btn-primary button1" width={"24rem"} href="/contact"> Contact us </a></Text>
  <br/>
</Card>
</motion.div>

<Card align='center'>
  <CardHeader>
    <Heading size='lg'> How we work</Heading>
  </CardHeader>
  <CardBody>
    <Text fontSize={"lg"}>Our work strategy is agile and we work in a three step process.</Text>
  </CardBody>
  <br/><br/>
  <CardFooter></CardFooter>
  </Card>

<SimpleGrid columns={[1, null, 3]} spacingY='200px' paddingBottom={"300px"}>
<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:-100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Requirement Analysis" 
    description="Safety and Client Requirement Analysis is the first step in the design process. We analyze the client's requirements and the safety of the design."
    icon = {GiArchiveResearch}
  />

  </GridItem>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:0 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Design and Development" 
    description="Design and Development is the second step in the design process. We design and develop the design to meet the client's requirements and safety."
    icon = {MdEngineering}
  />

  </GridItem>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100,x:100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0,x:0 }}
    transition={{ duration: 0.8 }}
  >
  <GridItem w='100%' h='10' align={"center"}>
  <HeadCard 
    heading="Sales and Marketing"
    description="Sales and Marketing is the third step in the design process. We sell and market the design to the client as well as analyze current market value with accurate calculation."
    icon = {GiSellCard}
  />
  </GridItem>
  </motion.div>

</SimpleGrid>

</div>

</>
    )
}
export default SectionAnav;