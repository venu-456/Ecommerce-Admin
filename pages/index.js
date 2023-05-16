import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Home() {

  const {data: session} = useSession();

  return <Layout>
   <div className="text-blue-900 flex justify-between "> 
        <h2>
            Hello, <b>{session?.user?.name}</b>
         </h2>
      <div className="flex bg-gray-300 gap-1 text-black h-12 rounded-lg">
        <img src = {session?.user?.image} alt= '' className="w-9 h-12"/>
        {session?.user?.name}
      </div> 
   </div>
   
  </Layout>
}
