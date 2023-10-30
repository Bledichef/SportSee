import PropTypes from "prop-types"
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

/**
 * Composant de graphique en secteurs (Pie Chart) représentant le pourcentage de l'objectif quotidien d'un utilisateur.
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.dataTodayScore - Les informations sur le pourcentage de l'objectif quotidien.
 * @returns {JSX} Composant React.
 */
const PieChartRender = ({ dataTodayScore }) => {


    
    const todayScore = dataTodayScore
    

console.log(dataTodayScore)
    const delta = 100 - (todayScore * 100)

    const score = [
        { name: "full", value: todayScore * 100, fill: "#FF0000" },
        { name: "empty", value: delta, fill: "white" }
    ]

    const inside = [{
        name: 'inside', value: 100
    }]

    return (
        <div className='PieChart'>
            <span className='title-chart'>Score</span>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart >
                    <Pie data={inside} dataKey="value" innerRadius={0} outerRadius={80} fill="white" />
                    <Pie data={score} dataKey="value" innerRadius={69} outerRadius={80} startAngle={90} endAngle={500} cornerRadius="50%" />
                </PieChart>
            </ResponsiveContainer>
            <span className='legend-number'>{dataTodayScore * 100}% </span>
            <p className='legend-text'>de votre <br />
                objectif</p>
        </div>
    )
};

PieChartRender.propTypes = {
    dataTodayScore: PropTypes.object
}

export default PieChartRender;