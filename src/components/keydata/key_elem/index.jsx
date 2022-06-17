import React from 'react';
import calories from '../../../assets/energy.svg';
import proteines from '../../../assets/chicken.svg';
import glucides from '../../../assets/apple.svg';
import lipides from '../../../assets/cheeseburger.svg';

//build key elem depending on content of dataKey
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
                            {`${([data.calorieCount] / 1000).toFixed(3)}kCal`}
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

export default KeyElem;
