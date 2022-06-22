//@ts-check

import PropTypes from 'prop-types';
import {
    PieChart,
    Pie,
    Legend,
    ResponsiveContainer,
    PolarAngleAxis,
    Cell,
} from 'recharts';
import styled from 'styled-components';

/**
 * Activity with a Radial Bar Chart
 *
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactElement}
 */

const Objective = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.65);
    font-weight: 500;
    line-height: 26px;
    span {
        color: rgba(0, 0, 0, 0.8);
        font-weight: 700;
        font-size: 26px;
    }
`;

const InnerCercle = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 57%;
    height: 57%;
    border-radius: 50%;
    background-color: white;
`;

function Score({ data }) {
    // console.log('ICI SCORE from Score func');
    // console.log(data);
    const dataScore = [];
    if (data.todayScore) {
        dataScore.push({ score: data.todayScore });
    }
    if (data.score) {
        dataScore.push({ score: data.score });
    }
    if (dataScore.length === 0) {
        return null;
    }

    if (dataScore.length > 0) {
        dataScore.map((entry, index) => {
            if (index === 0) {
                dataScore.push({ score: 1 - entry.score });
            }
        });
    }

    console.log('XXXXXXXXdataScore', dataScore);

    return (
        <>
            <h2>Score</h2>
            <InnerCercle />
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={dataScore}
                        dataKey="score"
                        innerRadius={73}
                        outerRadius={85}
                        startAngle={90}
                        endAngle={460}
                        cornerRadius={10}

                        // fill="#fbfbfb"
                    >
                        {dataScore.map((entry, index) => {
                            if (index === 0) {
                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill="#FF0000"
                                    />
                                );
                            }
                            return (
                                <Cell
                                    key={`cell-${index}`}
                                    stroke="transparent"
                                    fill="transparent"
                                />
                            );
                        })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <Objective>
                <span>{dataScore[0].score * 100}%</span>
                <br /> de votre
                <br /> objectif
            </Objective>
        </>
    );

    // const style = {
    //     top: '50%',
    //     right: 0,
    //     transform: 'translate(0, -50%)',
    //     lineHeight: '24px',
    // };

    // const renderLegend = (props) => {
    //     const { payload } = props;
    //     console.log(payload);
    //     return (
    //         <div>
    //             <div className="radialLegend">
    //                 <span className="percent">
    //                     {payload[0].payload.score * 100}%
    //                 </span>
    //                 <p>de votre objectif</p>
    //             </div>
    //         </div>
    //     );
    // };
    /* <ResponsiveContainer width="100%" height="100%">
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
            </ResponsiveContainer> */
}

export default Score;
Score.propType = {
    data: PropTypes.object.isRequired,
};

Score.defaultProps = {
    data: {},
};
