import { Navigate, useParams } from 'react-router-dom';
import BarChartRender from '../components/BartChartRender';
import KeyData from '../components/KeyData';
import { userList } from '../utils/const/userList';
import LineChartRender from '../components/LineChartRender';
import RadarChartRender from '../components/RadarChartRender';
import PieChartRender from '../components/PieChartRender';
import { urlMock } from '../utils/const/urlMock';
import { callApi } from '../utils/useApi/useApi';
import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../utils/context"



/**
 * Page de profil affichant des informations détaillées et des graphiques sur un utilisateur.
 * @returns {JSX} Composant React - Page de profil.
 */
const Profile = () => {
    const { id } = useParams()
    const { mode } = useContext(ModeContext)
    const [data, setData] = useState({})
    const url = mode
    const [loading, setLoading] = useState(true);
    const [mainData, setMainData] = useState({});
    const [dataActivity, setActivityData] = useState({});
    const [dataAverageSessions, setAverageSessionsData] = useState({});
    const [dataPerformances, setPerformancesData] = useState({});

    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const dataMain = await callApi(url.userMainData(id));
                console.log("Main Data:", dataMain);
                setMainData(dataMain);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Main Data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [id, url]);

    useEffect(() => {
        async function fetchActivityData() {
            try {
                const dataActivity = await callApi(url.userActivity(id));
                console.log("Activity Data:", dataActivity);
                setActivityData(dataActivity);
            } catch (error) {
                console.error("Error fetching Activity Data:", error);
            }
        }
        fetchActivityData();
    }, [id, url]);

    useEffect(() => {
        async function fetchAverageSessionsData() {
            try {
                const dataAverageSessions = await callApi(url.userAverageSessions(id));
                console.log("Average Sessions Data:", dataAverageSessions);
                setAverageSessionsData(dataAverageSessions);
            } catch (error) {
                console.error("Error fetching Average Sessions Data:", error);
            }
        }
        fetchAverageSessionsData();
    }, [id, url]);

    useEffect(() => {
        async function fetchPerformancesData() {
            try {
                const dataPerformances = await callApi(url.userPerformances(id));
                console.log("Performances Data:", dataPerformances);
                setPerformancesData(dataPerformances);
            } catch (error) {
                console.error("Error fetching Performances Data:", error);
            }
        }
        fetchPerformancesData();
    }, [id, url]);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    const dataTodayScore = mainData.todayScore || mainData.score;
    

   // const dataMain = useApi(url.userMainData(id))
    // const dataActivity = useApi(url.userActivity(id))
    // const dataAverageSessions = useApi(url.userAverageSessions(id))
    // const dataPerformances = useApi(url.userPerformances(id))

    console.log("dataAverageSessions in Profile:", dataAverageSessions);



    // if (dataMain.errorUrl || dataActivity.errorUrl || dataAverageSessions.errorUrl || dataPerformances.errorUrl) {
    //     return <Navigate to="/error" />
    // }
    console.log("dataTodayScore in Profile:", dataTodayScore);
console.log(data)
console.log(dataActivity);
console.log("Main Data:", mainData);

console.log(mainData)
return (
    <div className='Profile'>
        <header>
            <h1 className='title'>Bonjour <span className='firstname'>{mainData.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className='container-graph'>
            <div className='container-graph-recharts'>
            {dataActivity && (
        <BarChartRender dataActivity={dataActivity} />
    )}

                <div className='container-small-graph'>
                <LineChartRender dataAverageSessions={dataAverageSessions} />
                        {dataPerformances && <RadarChartRender dataPerformances={dataPerformances} />}
                        <PieChartRender dataTodayScore={dataTodayScore} />


                </div>
            </div>
            <KeyData keyData={mainData.keyData} />

        </div>
        <span className='data-type'>{mode === urlMock ? "--- Données Mockées ---" : "--- Données de l'API ---"}</span>
    </div>
);
}

export default Profile;