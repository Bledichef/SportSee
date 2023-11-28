import PropTypes from "prop-types";
import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import UserPerformances from '../utils/classes/UserPerformances';


/**
 * Composant de graphique radar représentant les détails de performance d'un utilisateur.
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.dataPerformances - Les informations sur les détails de performance.
 * @returns {JSX} Composant React.
 */
console.log("1")
const RadarChartRender = ({ dataPerformances }) => {
    console.log("2")
    const performancesData = dataPerformances.data;

    console.log("performancesData:", performancesData);
    const french = {
        1: "Intensité",
        2: "Vitesse",
        3: "Force",
        4: "Endurance",
        5: "Energie",
        6: "Cardio",  
    }
    // const french = {
    //     1: "Cardio",
    //     2: "Energie",
    //     3: "Endurance",
    //     4: "Force",
    //     5: "Vitesse",
    //     6: "Intensité"
    // }
    const translation = (el) => french[el]
    return (<>{performancesData && (
        <div className='RadarChart'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="60%" data={performancesData}>
                    <PolarGrid radialLines={false} />
                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                    <PolarAngleAxis dataKey="kind" tickSize={7} tickFormatter={translation} stroke="#FFF" fontSize={10} tickLine={false} />
                    <Radar dataKey="value" fill='#FF0101B2' fillOpacity={0.8} />

                </RadarChart>
            </ResponsiveContainer>
        </div>
    )}</>)
};

RadarChartRender.propTypes = {
    dataPerformances: PropTypes.array,
};

export default RadarChartRender;