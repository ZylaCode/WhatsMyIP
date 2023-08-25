import React, { useEffect, useState } from 'react';
import axios from 'axios';

//require('dotenv').config();

console.log(process.env.VITE_IP_API_KEY);

const IpGenerator= () => {
    const [ip, setIp] = useState({});
    // const [time, setTime] = useState();
    const [error, setError] = useState(null);

    const fetchIp = async() =>{
        const apiKey = process.env.VITE_IP_API_KEY;
        try{
            const { data } = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}`
         );
        setIp(data);
        console.log(data);
        } catch (error) {
        setError(error, "error");
        }
    }


    useEffect (() => {
        fetchIp();
    }, []);

    return(
        <div>
        <div key={ip.id}>
            <h1>What is my IP?</h1>
            <h2>My IP is: {ip.ip}</h2>
            <p>Your Location: {ip.location.region}, {ip.location.country}</p>
            <p>Time: {} Date: {}</p>
        </div>
        </div>
    )
}

export default IpGenerator;