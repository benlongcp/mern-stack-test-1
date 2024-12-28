import React from 'react'
import { useState } from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import { useProductStore } from '../store/product'

const CreatePage = () => {


  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const { createProduct } = useProductStore()

  const handleAddProduct = async() =>{
    const { success, message } = await createProduct(newProduct)
    console.log("success", success, "\n message", message)
  }

  return (
    <Container maxW={"container.sm"}>
      
      <VStack spacing={8}>

        <Heading as="h1" size={"2xl"} textAlign={"center"} mb={8} >
          Create New Product
        </Heading>

        <Box w={"full"} bg={"gray.500"} p={6} rounded={"lg"} shadow={"md"} >
          <VStack spacing={4}>
            <Input
              placeholder='product name'
              name='name'
              value={newProduct.name}
              onChange={(e)=>{ setNewProduct({...newProduct, name: e.target.value})}}
            />

            <Input
              placeholder='product price'
              name='price'
              value={newProduct.price}
              onChange={(e)=>{ setNewProduct({...newProduct, price: e.target.value})}}
            />

            <Input
              placeholder='product image'
              image='image'
              value={newProduct.image}
              onChange={(e)=>{ setNewProduct({...newProduct, image: e.target.value})}}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>

          </VStack>

        </Box>

      </VStack>

    </Container>
  )
}

export default CreatePage