import yoga from '../../assets/yoga.svg';
import swimming from '../../assets/swimming.svg';
import cycling from '../../assets/cycling.svg';
import dumbbells from '../../assets/dumbbells.svg';

function Aside() {
    return (
        <div className="aside">
            <div className="wrap_all_img">
                <div className="wrap_img_aside">
                    <img src={yoga} alt="" />
                </div>
                <div className="wrap_img_aside">
                    <img src={swimming} alt="" />
                </div>
                <div className="wrap_img_aside">
                    <img src={cycling} alt="" />
                </div>
                <div className="wrap_img_aside">
                    <img src={dumbbells} alt="" />
                </div>
            </div>
            <div className="copiryght">Copiryght, SportSee 2020</div>
        </div>
    );
}

export default Aside;
