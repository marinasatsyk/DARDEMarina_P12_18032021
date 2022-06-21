//@ts-check

import PropTypes from 'prop-types';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
    PolarAngleAxis,
    Label,
} from 'recharts';

/**
 * Activity with a Radial Bar Chart
 *
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactElement}
 */

function Score({ data }) {
    console.log('ICI SCORE from Score func');
    console.log(data);
    const dataScore = [];
    if (data.todayScore) {
        dataScore.push({ score: data.todayScore });
    }
    if (data.score) {
        dataScore.push({ score: data.score });
    }
    console.log('dataScore', dataScore, 'fontSize: 25px;');
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    const renderLegend = (props) => {
        const { payload } = props;
        console.log(payload);
        return (
            <div>
                <div className="radialLegend">
                    <span className="percent">
                        {payload[0].payload.score * 100}%
                    </span>
                    <p>de votre objectif</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="80%"
                    barSize={12}
                    data={dataScore}
                    startAngle={90}
                    endAngle={450}

                    // @ts-ignore
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        // @ts-ignore
                        minAngle={300}
                        background={{ fill: '#FBFBFB' }}
                        clockWise
                        dataKey="score"
                        cornerRadius={10}
                        fill="red"
                    />
                    <Label
                        value="Pages of my website"
                        offset={0}
                        position="insideBottom"
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="scoreLabel"
                        style={{
                            padding: '30px',
                            transform: 'translate(15%, 10%)',
                            color: '#000',
                            fontWeight: '500',
                            fontSize: '18px',
                        }}
                    >
                        Score
                    </text>
                    <Legend
                        content={renderLegend}
                        layout="horizontal"
                        verticalAlign="middle"
                        wrapperStyle={style}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Score;
Score.propType = {
    data: PropTypes.object.isRequired,
};

Score.defaultProps = {
    data: {},
};
