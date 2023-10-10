import { Navigate, useParams } from 'react-router-dom';

import KeyData from '../components/KeyData';
import { userList } from '../utils/const/userList';

import { urlMock } from '../utils/const/urlMock';
import { callApi } from '../utils/useApi/useApi';
import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../utils/context"



/**
 * Page profil with all charts and infos
 * @returns {JSX} - React component - Page 
 */
const Profile = () => {
    const { id } = useParams()
    const { mode } = useContext(ModeContext)
    const [data, setData] = useState({})

    useEffect( () => {
    async function fetchData() {
        const dataMain = await  callApi(url.userMainData(id))
        setData(dataMain)
    }
    fetchData()
    }       , [id])


    const url = mode

   // const dataMain = useApi(url.userMainData(id))
    // const dataActivity = useApi(url.userActivity(id))
    // const dataAverageSessions = useApi(url.userAverageSessions(id))
    // const dataPerformances = useApi(url.userPerformances(id))




    // if (dataMain.errorUrl || dataActivity.errorUrl || dataAverageSessions.errorUrl || dataPerformances.errorUrl) {
    //     return <Navigate to="/error" />
    // }

console.log(data)

    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{data.userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className='container-graph'>
                <div className='container-graph-recharts'>

                    <div className='container-small-graph'>

                    </div>
                </div>
                <KeyData keyData={data?.data?.keyData} />
            </div>
            <span className='data-type'>{mode === urlMock ? "--- Données Mockées ---" : "--- Données de l'API ---"}</span>
        </div>
    );
};

export default Profile;