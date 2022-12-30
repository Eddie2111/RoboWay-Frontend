import { 
    GridItem, SimpleGrid, CardFooter, Text, CardBody, 
    Card, Heading, Image, Stack, Divider, CardHeader } from '@chakra-ui/react';
import { motion } from 'framer-motion';



const sectionCnav = () => {
    const founders = {
        sihabShahriar: {
            name: "Sihab Shahriar",
            image: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268853/Profiles/sihab_bhai_q4ifyx.png",
            designation:"Chief Technical Officer"
        },
        arifinRafi: {
            name: "Arifin Rafi",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672268852/Profiles/rafi_bhai_mvkk8g.png",
            designation:"Chief Executive Officer"
        },
        asmTareq: {
            name: "Tareq Mahmood",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672268852/Profiles/tareq_bhai_pubg0y.png",
            designation:"Chief Information Officer"
        },
        soumikShranto:{
            name: "Soumik Shranto",
            image:"https://res.cloudinary.com/homeeventtest/image/upload/v1672268860/Profiles/Shrantoo_zbfbnj.png",
            designation:"Chief Strategy Officer"
        }
    }
    return (
        <div className='container'>
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <Card align='center'>
            <CardHeader>
            <Heading align={"center"} size="lg">Founders of Roboway</Heading>
            </CardHeader>
            <CardBody>
                <Text align={"center"}>With proper skill distribution, Roboway was founded by four members.</Text>
            </CardBody>
            <CardFooter>
                
            </CardFooter>
            </Card>
            </motion.div>


            <SimpleGrid columns={[1, null, 4]} spacingY='470px' paddingBottom={"390px"}>
                
                <GridItem w='120' h='120' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Card maxW='sm' h="570" className="card">
                    <CardBody>
                        <Image
                        src={founders.sihabShahriar.image}
                        height={"285px"}
                        alt='Sihab Shahriar'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{founders.sihabShahriar.name}</Heading>
                        <Text>
                        {founders.sihabShahriar.designation}
                        </Text>
                        <Divider/>
                        <a className="button1 btn btn-primary" href="profile/?id=5fbc5333-0143-4cb6-a231-fff929ec2627">Check Profile</a>
                        </Stack>
                    </CardBody>

                    </Card>
                </motion.div>
                </GridItem>
                <GridItem w='120' h='120' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Card maxW='sm' h="570" className="card">
                    <CardBody>
                        <Image
                        src={founders.arifinRafi.image}
                        alt='Arifin Rafi'
                        height={"290px"}
                        marginTop={"-5px"}
                        paddingTop={"-5px"}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{founders.arifinRafi.name}</Heading>
                        <Text>
                        {founders.arifinRafi.designation}
                        </Text>
                        <Divider/>
                        <a className="button1 btn btn-primary" href="profile/?id=c76771c6-2162-4844-a643-f5c63175b5e4">Check Profile</a>
                        </Stack>
                    </CardBody>

                    </Card>
                </motion.div>
                </GridItem>
                <GridItem w='120' h='120' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Card maxW='sm' h="570" className="card">
                    <CardBody align={"center"}>
                        <Image
                        src={founders.asmTareq.image}
                        alt='Tareq Mahmood'
                        height={"285px"}
                        paddingTop = {"-20px"}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{founders.asmTareq.name}</Heading>
                        <Text>
                        {founders.asmTareq.designation}
                        </Text>
                        <Divider/>
                        <a className="button1 btn btn-primary" href="profile/?id=66d09463-db28-4a26-b492-8f436dea37e9">Check Profile</a>
                        </Stack>
                    </CardBody>

                    </Card>
                </motion.div>
                </GridItem>
                <GridItem w='120' h='120' align={"center"}> 
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Card maxW='sm' h="570" className="card">
                    <CardBody align={"center"}>
                        <Image
                        src={founders.soumikShranto.image}
                        alt='Soumik Hassan Shranto'
                        height={"285px"}
                        paddingTop = {"-20px"}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{founders.soumikShranto.name}</Heading>
                        <Text>
                        {founders.soumikShranto.designation}
                        </Text>
                        <Divider/>
                        <a className="button1 btn btn-primary" href="profile/?id=61ea4743-57e3-4047-9416-dded311ec471">Check Profile</a>
                        </Stack>
                    </CardBody>

                    </Card>
                </motion.div>
                </GridItem>
                
            </SimpleGrid>
            <br/><br/><br/>
        </div>
    );
}
export default sectionCnav;    