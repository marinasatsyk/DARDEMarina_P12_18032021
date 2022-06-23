//@ts-check

import PropTypes from 'prop-types';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import styled from 'styled-components';

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
/**
 * Score  return React Element contains chart of today score
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function Score({ data }) {
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

    return (
        <>
            <h2 className="title_score">Score</h2>
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
}

Score.propType = {
    data: PropTypes.object.isRequired,
};

Score.defaultProps = {
    data: {},
};
export default Score;
