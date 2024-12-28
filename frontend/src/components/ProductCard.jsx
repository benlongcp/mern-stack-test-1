import React from 'react'
import { Box, Heading, Image, Text, HStack, Button } from '@chakra-ui/react'
// import { useToast } from '@chakra-ui/react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/product';


const ProductCard = ({product}) => {

  const textColor = "gray.600"
  const bg = "blue.200"

  // const toast = useToast()

  const {deleteProduct} = useProductStore()
  
  const handleDeleteProduct = async(pid) =>{
    const { success, message } = await deleteProduct(pid)
    // if (!success){
    //   toast({
    //     title: 'Error',
    //     description: message,
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //   })
    // } else {
    //   toast({
    //     title: 'Success',
    //     description: message,
    //     status: 'success',
    //     duration: 3000,
    //     isClosable: true,
    //   })
    // }
  }



  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform: "translateY(-5px)", shadow: "xl"}}
    bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4} >
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <Button><FaRegEdit></FaRegEdit></Button>
          <Button onClick={()=>handleDeleteProduct(product._id)}><MdDeleteForever></MdDeleteForever></Button>
        </HStack>

      </Box>

    </Box>
  )
}

export default ProductCard