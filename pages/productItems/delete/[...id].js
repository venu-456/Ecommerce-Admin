import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DeleteProductPage(){
    const [productInfo, setProductInfo]=useState(null);
    const router =useRouter();
    const {id} = router.query;
    useEffect(()=>{
        if(!id) return;
        axios.get('/api/product?id='+id).then(response =>{
            setProductInfo(response.data)
        })
    },[id]);
    async function deleteProduct(){
        await axios.delete('/api/product?id='+id);
        goBack();
    }
    function goBack(){
        router.push('/products')
    }
    return <Layout>
        <h1 className="text-center">Do you really want to delete Product &nbsp; "{productInfo?.title}"?</h1>
        <div className="flex gap-2 justify-center">
        <button 
         className="btn-red"
         onClick={deleteProduct}>
            Yes
        </button>
        <button 
         className="btn-default"
         onClick={goBack}>
          No
        </button>
        </div>
        
    </Layout>
}