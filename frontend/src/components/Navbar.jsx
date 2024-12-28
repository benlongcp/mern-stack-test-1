import React from 'react'
import { Container, Flex, Text, Link, HStack, Button } from '@chakra-ui/react'
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useState } from 'react';



const Navbar = () => {

  const [darkMode, setDarkMode ] = useState(true)

  console.log(darkMode)
  const toggleDark = () =>{
    setDarkMode(!darkMode)
  }

  return (
    <Container maxW={"1140px"} px={4} bg={darkMode? "gray.100" : "gray:900"}>

      <Flex
      h={26}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
      >

        <Text
        fontSize={{base: "22", sm: "28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        >

          <Link to={"/"}>Product Store</Link>
          
        </Text>


        <HStack spacing={2} alignItems={"center"}>
          <Link tp={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20}/>
            </Button>
          </Link>
          <Button onClick={ toggleDark }
            >

            {darkMode ? <IoMoon /> : <LuSun/>}
            
          </Button>
        </HStack>
      </Flex>
    </Container>

  )
}

export default Navbar