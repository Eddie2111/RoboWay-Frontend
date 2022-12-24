import { Card, CardBody, CardFooter, Heading,
    CardHeader, Text, SimpleGrid, GridItem
} from '@chakra-ui/react';
//import { motion } from 'framer-motion';
import { motion } from "framer-motion-3d";
import StatsCard from './statsCard';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdConstruction, MdOutlineConnectWithoutContact } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
import { BiHappyBeaming } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';

const SectionB = ()=>{
    const dataSet = {
        "projectsPlanned": 10,
        "customersContacted": 5,
        "happyClients": 4,
        "projectsUnderDevelopment": 3,
        "projectsCompleted": 1,
        "projectsCollaborated": 5,
    }
    return (
<>
<div className="container">


<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

<Card align='center'>
  <CardHeader>
  <Heading size="lg">Current Statistics of Roboway</Heading>
  </CardHeader>
  <CardBody>
    <Text>Roboway is thriving for success with the very pace for ensuring safety</Text>
  </CardBody>
  <CardFooter>
    
  </CardFooter>
</Card>
</motion.div>


<motion.div
    initial={{ opacity: 0, scale: 0.5, y: -100 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

<SimpleGrid columns={[2, null, 6]} spacingY='200px' paddingBottom={"190px"}>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Projects Planned"}
    value={dataSet.projectsPlanned}
    icon={FaProjectDiagram}
  />
  </GridItem>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Projects Under Development"}
    value={dataSet.projectsUnderDevelopment}
    icon={MdConstruction}
  />
  </GridItem>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Completed Projects"}
    value={dataSet.projectsCompleted}
    icon={TiTickOutline}
  />
  </GridItem>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Happy Clients"}
    value={dataSet.happyClients}
    icon={BiHappyBeaming}
  />
  </GridItem>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Customers Contacted"}
    value={dataSet.customersContacted}
    icon={IoMdContacts}
  />
  </GridItem>

  <GridItem w='100%' h='10'>
  <StatsCard
  title={"Projects Collaborated"}
    value={dataSet.projectsCollaborated}
    icon={MdOutlineConnectWithoutContact}
  />
  </GridItem>

</SimpleGrid>

</motion.div>

</div>


</>
    )
}
export default SectionB;