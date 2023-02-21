import React from 'react'
import { useEffect, useState } from 'react';
import { instance } from '../api/instance.jsx';

const useFetchData = (ENDPOINT) => {
    const [data , setData]= useState([]);
    const [isLoding, setIsLoding] =useState(false);
    useEffect(()=>{
        setIsLoding(true);
        instance.get(ENDPOINT)
        .then(response => {
            setData(response.data);
            setIsLoding(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoding(false);
        }
            )
        
    },[])

    return [data, isLoding];
}

export default useFetchData