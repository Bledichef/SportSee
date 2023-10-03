//import React from "react"
import axios from "axios"
//import { useEffect, useState } from "react"
//import convertData from "../mapper/convertData"


 export const useApi = (url) => {
 //   const [data, setData] = useState({})
   // const [errorUrl, setErrorUrl] = useState(false)

   // useEffect(() => {
     return   axios.get(url)
          //  .then(res => setData(convertData(res.data, url)))
            .then(res => res.data)
            //)
            .catch(error => {
              //  setErrorUrl(true);
                console.log(error)
            })
 //   }, [url])
   // return { data, errorUrl }
}