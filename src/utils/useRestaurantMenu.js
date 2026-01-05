import { useEffect, useState } from "react";
import {Menu_Api} from "../utils/constants"
//Custom Hook
export const useRestaurantMenu=(resid)=>{
    const[ResInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(Menu_Api);
        const json=await data.json();
        console.log(json);
        setResInfo(json);

    }

    //The single Responsibilty of this component is only fetching the data
  return ResInfo;
}

