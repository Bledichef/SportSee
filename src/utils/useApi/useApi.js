

import axios from "axios"
//import { useEffect, useState } from "react"
import convertData from "../mapper/convertData"

/**
 * Effectue un appel à une API en utilisant axios, convertit les données en fonction de l'URL, et renvoie les données converties.
 * @param {string} url - L'URL de l'API à appeler.
 * @returns {Promise<any>} - Une promesse qui résout en données converties ou renvoie une erreur.
 */

export const callApi = (url) => {



        if (url) {
            return axios.get(url)
                .then(res => convertData(res.data, url))
                .catch(error => {
                    console.log(error)
                    // setErrorUrl(true)
                    // setErrorServer(true)
                })
        }

}