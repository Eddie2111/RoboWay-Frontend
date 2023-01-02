import React,{ useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Box,Card,CardBody, Heading, Icon, Text } from "@chakra-ui/react"
import { Backend } from './components/backend/api';
function Profile() {
    const [searchParams] = useSearchParams();
    const [ dataset, setDataset ] = useState({});
    const navigate = useNavigate();
    if(searchParams.get("id") === null){
        navigate('/products');
    }
    useEffect(() => {
        const getData = searchParams.get("id");
        const postData = {id: getData.toString()};
        axios.post(Backend+'profile',postData, { withCredentials: true })
          .then((response) => {
            setDataset(response.data)
        });
      }, []);
 
    const title = ""+dataset.name;
    console.log(dataset)
  return (
    <>
    <SEO title={title}/>
    <Navbar/>
    <center>
        <br/>
    <img src={dataset.cover} className="imgCover" alt="cover"/>
    <img src={dataset.dp} className="imgDP" alt="dp"/>
    <div className="container">
    
  <div class="row row-cols-1 row-cols-md-4">
    <div class="col">
        <div class="card">
            <div class="card-body">
            <Text fontSize='2xl'>{dataset.name}</Text>
            <Text fontSize="sm">&nbsp;</Text>
            <ul class="list-group list-group-flush" style={{textAlign:"center"}}>
                <li class="list-group-item">
                    <center>
                    <div className="ProfileSocialMedia">
                        <ul className="ProfileSocialMediaList">
                            <li className="spacing">
                                <a href={dataset.facebook} target="_blank" rel="noreferrer">
                                    <Icon as={BsFacebook} w={10} h={10} color='#3b5998' />
                                </a>
                            </li>
                            <li className="spacing">
                                <a href={dataset.github} target="_blank" rel="noreferrer">
                                    <Icon as={BsGithub} w={10} h={10} color='#171515' />
                                </a>
                            </li>
                            <li className="spacing">
                                <a href={dataset.linkedin} target="_blank" rel="noreferrer">
                                    <Icon as={BsLinkedin} w={10} h={10} color='#0072b1' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                   </center>
                </li>
                <li class="list-group-item"><Text fontSize="lg">{dataset.designation}</Text></li>
                <li class="list-group-item"><Text fontSize="lg">Focused in: {dataset.speciality}</Text></li>
                <li class="list-group-item"><Text fontSize="lg">&nbsp;</Text></li>
            </ul>
  </div>
        </div>
    </div>
    <div class="col">
    <Box className="card cardModAbout">
    <Card direction={{ base: 'column', sm: 'row' }}>
        <CardBody>
            <Heading align={"left"} fontSize={"lg"}>About </Heading>
            <Text align={"left"}>{dataset.about}</Text>
        </CardBody>
    </Card>
    </Box>
    </div>
  </div>

</div>
    <br/>
    
    



        </center>
    <Footer/>
    </>
  );
}

export default Profile;