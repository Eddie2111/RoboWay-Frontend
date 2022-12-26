import { Card, CardBody, CardFooter, Heading,
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
    <Text>Our primary concern is to find a solution using Robotics and Automation.</Text>
  </CardBody>
  <CardFooter>
    
  </CardFooter>
</Card>
</motion.div>


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