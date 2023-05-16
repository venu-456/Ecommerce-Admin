import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../../../components/ProductForm";

export default function Editproductpage(){
    const [productInfo, setProductInfo]=useState(null);
    const router =useRouter();
    const {id} = router.query
    useEffect(()=>{
        if(!id) return;
        axios.get('/api/product?id='+id).then(response =>{
            setProductInfo(response.data)
        })
    },[id]);
    return (
        <Layout>
            <h1>Edit Product</h1>
            {productInfo&&<ProductForm {...productInfo}/>}
        </Layout>  
    )
}