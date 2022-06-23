//@ts-check
import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import calories from '../../../assets/energy.svg';
//@ts-ignore
import proteines from '../../../assets/chicken.svg';
//@ts-ignore
import glucides from '../../../assets/apple.svg';
//@ts-ignore
import lipides from '../../../assets/cheeseburger.svg';

/**
 *  KeyElem build the elem-counter  of calories, proteins, carbohydrates, lipids
 * @param {Object} props
 * @returns  {React.ReactElement}
 */
function KeyElem({ data, unit }) {
    console.log('=======>dataKey====');
    console.log(data);
    console.log(unit);
    return (
        <div className="wrap_key_elem">
            {unit === 'calorieCount' ? (
                <div className="wrap_img_key red">
                    <img src={calories} alt="fire"></img>
                </div>
            ) : (
                ''
            )}
            {unit === 'proteinCount' ? (
                <div className="wrap_img_key blue">
                    <img src={proteines} alt="chicken"></img>
                </div>
            ) : (
                ''
            )}
            {unit === 'carbohydrateCount' ? (
                <div className="wrap_img_key yellow">
                    <img src={glucides} alt="apple"></img>
                </div>
            ) : (
                ''
            )}
            {unit === 'lipidCount' ? (
                <div className="wrap_img_key red">
                    <img src={lipides} alt="cheesburger"></img>
                </div>
            ) : (
                ''
            )}

            <div className="wrap_unit">
                {unit === 'calorieCount' ? (
                    <>
                        <div className="amount calorie">
                            {`${(+[data.calorieCount] / 1000).toFixed(3)}kCal`}
                        </div>
                        <div className="unit calorie">Calories</div>
                    </>
                ) : (
                    ''
                )}
                {unit === 'proteinCount' ? (
                    <>
                        <div className="amount protein">
                            {`${data.proteinCount}g`}
                        </div>
                        <div className="unit protein">Proteines</div>
                    </>
                ) : (
                    ''
                )}
                {unit === 'carbohydrateCount' ? (
                    <>
                        <div className="amount carbohydrate">
                            {`${data.carbohydrateCount}g`}
                        </div>
                        <div className="unit carbohydrate">Glucides</div>
                    </>
                ) : (
                    ''
                )}
                {unit === 'lipidCount' ? (
                    <>
                        <div className="amount lipid">
                            {`${data.lipidCount}g`}
                        </div>
                        <div className="unit lipid">Lipides</div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

KeyElem.propTypes = {
    data: PropTypes.object.isRequired,
    unit: PropTypes.string.isRequired,
};
export default KeyElem;
