// //import React from "react"
// import axios from "axios"
// //import { useEffect, useState } from "react"
// //import convertData from "../mapper/convertData"


//  export const useApi = (url) => {
//  //   const [data, setData] = useState({})
//    // const [errorUrl, setErrorUrl] = useState(false)

//    // useEffect(() => {
//      return   axios.get(url)
//           //  .then(res => setData(convertData(res.data, url)))
//             .then(res => res.data)
//             //)
//             .catch(error => {
//               //  setErrorUrl(true);
//                 console.log(error)
//             })
//  //   }, [url])
//    // return { data, errorUrl }
// }


import axios from "axios"
//import { useEffect, useState } from "react"
import convertData from "../mapper/convertData"

export const callApi = (url) => {
    // const [data, setData] = useState({})
    // const [errorUrl, setErrorUrl] = useState(false)
    // const [errorServer, setErrorServer] = useState(false)

  //  useEffect(() => {
        if (url) {
            return axios.get(url)
                .then(res => convertData(res.data, url))
                .catch(error => {
                    console.log(error)
                    // setErrorUrl(true)
                    // setErrorServer(true)
                })
        }
  //  }, [url])
  //  return { data, errorUrl, errorServer }
}