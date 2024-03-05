import { useEffect, useState } from "react";
import axios from "axios";
const backendUrl = process.env.REACT_APP_URL;

const Home = () => {
    const [data, setData] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`${backendUrl}/question`)
            .then(async (response) => {                
                if(response.status !== 200){
                    console.log("Could not get data");
                }
                else{
                    const jsonData = await response.data;
                    setData(jsonData);
                    console.log(jsonData)                
                }
            })
            .catch(err => {
                console.log(err);
            })
        }

        fetchData();
    }, [])
    
    return(
        <div>
            <h1>Home</h1>                     
        </div>        
    );
}

export default Home;