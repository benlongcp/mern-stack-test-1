import Product from '../models/product.model.js'
import mongoose from 'mongoose';


export const getProducts = async (req, res)=>{
  try{

    const products = await Product.find({})
    res.status(200).json({success:true, data: products})


  }catch(error){
    console.log("error getting all products", error)
    res.status(500).json({success:false, message: "server error dawg"})

  }
}

export const createProduct = async (req, res)=>{

  const product = req.body; //user-sent data

  if (!product.name || !product.price || !product.image){
    return res.status(400).json({success:false, message: "enter all required info"})
  }
  const newProduct = new Product(product)

  try{

    await newProduct.save()
    res.status(201).json({success:true, data: newProduct})

  } catch (error){
    console.log(`error saving product to db: ${error}`)
    res.status(500).json({success:false, message: "server error"})
  }
}

export const updateProduct = async (req, res)=>{
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "invalid id supplied"})
  }

  try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
    res.status(200).json({success:true, data: updatedProduct})

  }catch(error){
    console.log("error updating the product", error)
    res.status(500).json({success:false, message: "server error brah"})


  }
}

export const deleteProduct = async (req, res)=>{

  const { id } = req.params
 
  try{

    await Product.findByIdAndDelete(id)
    res.status(200).json({success:true, message:"product deleted"})
  }catch(error){
    console.log(`error deleting product in db: ${error}`)
    res.status(404).json({success:false, message:"product not found"})

  }

}