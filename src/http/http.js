import axios from "axios";

export async function fetchProducts(){

    try {
        const response = await axios.get('http://localhost:4000');
        if(response.status === 200) {
            return response?.data?.data
        } else {
            return []
        }
    }catch(err) {
        console.log(err);
        return [];
    }
}