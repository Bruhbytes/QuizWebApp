import { useEffect, useState } from "react";


const Home = () => {
    const [data, setData] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            fetch('/question')
            .then(async (response) => {                
                if(!response.ok){
                    throw Error("Could not get data");
                }
                const jsonData = await response.json()
                setData(jsonData);
                console.log(jsonData)                
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