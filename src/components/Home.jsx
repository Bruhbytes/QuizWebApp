import { useEffect, useState } from "react";


const Home = () => {
    const [data, setData] = useState({});
    

    useEffect(() => {
        const fetchData = async () => {
            fetch('/getQuestion')
            .then(response => {
                if(response.ok){
                    const jsonData = response.json()
                    setData(jsonData);
                    console.log(jsonData)
                }
                if(!response.ok){
                    throw Error("Could not get data");
                }
            })
            .catch(err => {
                console.log(err);
            })
        }

        fetchData();
    }, [])
    
    return(
        <div><h1>Home</h1></div>
    );
}

export default Home;