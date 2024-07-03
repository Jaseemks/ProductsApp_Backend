const productModel = require('../models/product')

const addProduct = async (req,res)=>{
    const data = req.body
// checking with our database product collection model
    const saveData = new productModel(data);
    await saveData.save();
    if(!saveData) throw new Error(400,'insert all data')
    res.status(201).send ({message : 'data saved successfully'})
}

const getProducts = async (req,res)=>{
    
    const allData = await productModel.find({})
    res.status(200).send ({data :allData,message : 'ok'})
}

const getProductsById = async (req,res)=>{
    
    const id = req.params.id
    console.log('efewfewfew :'+id);
    const data = await productModel.findById(id)
    res.status(200).send ({data :data,message : 'ok'})
}

const deleteProduct = async (req,res)=>{

    console.log(req.params.id);
    
    const id = req.params.id
    const data = await productModel.findByIdAndDelete(id)
    res.status(200).send ({data :data,message : 'ok'})
}



const updateProduct = async (req,res)=>{
    
    const id = req.params.id
    const newData = req.body
    // const checkData = new productModel(newData)  for checking schema
    const data = await productModel.findByIdAndUpdate({id,newData})
    res.status(200).send ({data :data,message : 'ok'})
}
module.exports = { addProduct,getProducts,getProductsById,updateProduct,deleteProduct };


