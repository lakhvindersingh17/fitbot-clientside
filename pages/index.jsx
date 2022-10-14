import { useEffect,useState } from "react"
import Card from "../Components/Card"
import Grid from "../Components/Grid/Index"
import fetchCustomers from "../services/fetchCustomers"

const Home=()=>{

    const[customers,setCustomers]=useState([])
    const [cities,setCities]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
        fetchCustomers().then((customers)=>setCustomers(customers))}
        fetchData()

    },[])
    useEffect(()=>{
        setCities(customers.filter((customer)=>))
    },[customers])

    return(
        <>
      <div>  
      <h1>Customers</h1>
        <select>
            {customer.length>0 && customers.filter(customer=>)}
        </select>
      <div/>

        {customers.length>=0 && <Grid data={customers} RenderCompomnent={(value)=> (<Card data={value} />) }/>}

        </>
    )
}

export default Home
