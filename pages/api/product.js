import mongooseConnect from "../../lib/mongoose";
import { newProduct } from "../../models/newProduct";

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;

  if (method === 'GET') {
    if(req.query?.id){
      res.status(200).json(await newProduct.findOne({_id: req.query.id}))
    }
    else{
      const products = await newProduct.find();
    res.status(200).json(products);
    }
    
  } else if (method === 'POST') {
    const { title, description, price } = req.body;
    const productDoc = await newProduct.create({
      title,
      description,
      price
    });
    res.status(200).json(productDoc); // Send response only once
  }else if (method === 'PUT') {
    const { title, description, price, _id } = req.body;
    await newProduct.updateOne({_id}, { title, description, price });
    res.json(true);
  }else if (method === 'DELETE') {
    if(req.query?.id){
        await newProduct.deleteOne({_id: req.query.id});
        res.json(true);
    }
  } else {
    res.status(405).end(); // Method Not Allowed for other HTTP methods
  }
};

export default handle;