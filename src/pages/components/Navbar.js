import { Box,Flex, Avatar,Grid, GridItem,
        HStack, Link, IconButton, Button, Menu, MenuButton, MenuList,
        MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack
            } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {motion} from 'framer-motion';

const Links = {Home: '/',Service: '/Service',About: '/About', Products: '/Products', Signup: '/Signup', Blogs: '/Blogs', Contact: '/Contact'}

const NavLink = ({ children }) => (
  <Link
    px={5}
    py={4}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={8} borderRadius={10}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={36} alignItems={'center'}>
            <Box><img src="./logo1.png" style={{marginLeft:"-10px"}} width="160px" height="120px"/></Box>
            <HStack
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
              
                <a href="/"> <NavLink key="Home">Home</NavLink></a>
                <a href="/service"> <NavLink key="/service">Service</NavLink></a>
                <a href="/about"> <NavLink key="/about">About</NavLink></a>
                <div class="dropdown">
                <span><Grid templateColumns='repeat(2, 0fr)' gap={0}>
  <GridItem>Products</GridItem>
  <GridItem><ChevronDownIcon/></GridItem>
</Grid></span>
                <div class="dropdown-content">
                    <motion.div >
                    <ul>
                <li className="productLinks"><a href="/product1">Robo Biker Helmet</a><br/></li>
                <li className="productLinks"><a href="/product2">Robo Contruction Helmet</a><br/></li>
                <li className="productLinks"><a href="/product3">Robo Fire Helmet</a><br/></li>
                    </ul>
                    </motion.div>
                </div>
                </div>
                <a href="/signup"> <NavLink key="/signup">Signup</NavLink></a>
                <a href="/blogs"> <NavLink key="/blogs">Blogs</NavLink></a>
                <a href="/contact"> <NavLink key="/contact">Contact</NavLink></a>
                
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                zIndex={1000}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'
                  }
                />
              </MenuButton>
              <MenuList style={{zIndex:1000}}>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                {Object.keys(Links).map((key,index,value) => (
                <a href={key}> <NavLink key={value}>{key}</NavLink></a>
                ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}