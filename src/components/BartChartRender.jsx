import PropTypes from "prop-types"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import circleRed from "../assets/icon-circle-red.png"
import circleBlack from "../assets/icon-circle-black.png"

/**
 * chart about daily activity of one user
 * @param {Array} dataActivity - props of component parent Profile / infos about daily activity 
 * @returns {JSX} - React component
 */
const BarChartRender = ({ dataActivity }) => {
    console.log("dataActivity in BarChartRender:", dataActivity);

    const formatXAxis = (tickItem) => {
        return tickItem + 1;
    }

    /**
     * Function for customize tooltip
     * @param {Boolean} active  
     * @param {Array} payload  
     */
    const CustomTooltip = ({ active, payload }) => {
        
        if (active && payload && payload.length) {
            return (
                <div className='container-payload-barchart'>
                    <p className='kg'>{`${payload[0].value}kg`}</p>
                    <p className='kcal'>{`${payload[1].value}kCal`}</p>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className='BarChart'>
            <div className="legend-title-barchart">
                <span className='title-barchart'>Activité quotidienne</span>
                <div className="legend-barchart">
                    <div className='legend-black'>
                        <img className='icon' src={circleBlack} alt="icon circle black" />
                        <span className='text-icon'>Poids (kg)</span>
                    </div>
                    <div className='legend-red'>
                        <img className='icon' src={circleRed} alt="icon circle red" />
                        <span className='text-icon'>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </div>


            <ResponsiveContainer width="90%" height={250} >
                <BarChart width={650} height={250} data={dataActivity.sessions} barCategoryGap={30} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 5" vertical={false} />
                    <XAxis tickFormatter={formatXAxis} tickLine={false} tickSize="15" tick={{ fill: "#9B9EAC", fontSize: "14" }} padding={{ left: -30, right: -30 }} stroke="#DEDEDE" />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickSize="25" domain={['dataMin-5', 'dataMax+1']} tickCount={4} tick={{ fill: "#9B9EAC", fontSize: "14" }} />
                    <YAxis hide yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                    <Tooltip width={50} content={<CustomTooltip />} cursor={{ fill: "#C4C4C4", fillOpacity: "0.50" }} position={{ y: 20 }} />
                    <Bar dataKey="kilogram" yAxisId="right" fill='#282D30' maxBarSize={12} radius={[20, 20, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" fill='#E60000' s maxBarSize={12} radius={[20, 20, 0, 0]} />

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

BarChartRender.propTypes = {
    dataActivity: PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
    }),
};

export default BarChartRender;