import axios from "axios"
import {SERVER_URL} from '../constants/index'

const fetchCustomers= async() => {

    try{
    const customers=await axios.get(`${SERVER_URL}/customer`)
        return customers.data.data
    }
    catch(error){
        throw Error('Error During Fetching Data',error)
    }
}

export default fetchCustomers