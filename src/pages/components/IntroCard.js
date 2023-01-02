import { Card, CardBody, Heading, Image, Stack, Text, Divider } from '@chakra-ui/react'
import React from 'react'

export const IntroCard = ({image, name, designation, altText})=>{
    return(
    <Card maxW='sm' h="400" className="card">
    <CardBody>
        <Image
            src={image}
            alt={altText}
            borderRadius='30px'
            height={"40%"}
        />
        <Stack mt='7' spacing='4'>
        <Heading size='md'>{name}</Heading>
        <Text> {designation} </Text>
        <Divider/>
        <a className="button1 btn btn-primary" href="profile/?id=5fbc5333-0143-4cb6-a231-fff929ec2627">Check Profile</a>
        </Stack>
    </CardBody>

    </Card>
    );
}

