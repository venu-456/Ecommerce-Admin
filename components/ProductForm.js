import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";


export default function ProductForm({
    _id ,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice}
    ){
    const [title,setTitle] = useState(existingTitle||'');
    const [description,setDescription] = useState(existingDescription||'');
    const [price,setPrice] = useState(existingPrice||'');
    const [goToproducts,setGoToproducts] = useState(false);
    const router = useRouter();
     const createProduct = async (ev)=>{
        ev.preventDefault();
        const data = {title,description,price};
        if(_id){
            await axios.put('/api/product',{...data,_id});
        }else{
            await axios.post('/api/product',data);
        }
        
        setGoToproducts(true)
    }
    if (goToproducts){
     router.push('/products');
    }
    return (
    <form onSubmit={createProduct}>
         <label>Product name</label>
         <input 
          type="text" 
          placeholder="product name" 
          value={title}
          onChange={ev => setTitle(ev.target.value)}/>
         <label>Description</label>
         <textarea 
          placeholder="description" 
          value={description}
          onChange={ev => setDescription(ev.target.value)}></textarea>
         <label>Price (in USD)</label>
         <input 
          type="text" 
          placeholder="price" 
          value={price}
          onChange={ev => setPrice(ev.target.value)}/>
         <button className="btn-primary">Save</button>
    </form>

    );
}