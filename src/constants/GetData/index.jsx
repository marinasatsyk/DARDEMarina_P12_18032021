import axios from 'axios';
//generic func for use ls if there's otherwise axios.
async function GetData(lsData, setFunc, url, dataName, loadFunc, errFunc) {
    try {
        console.log('getData func');

        if (lsData) {
            console.log('from LS');
            setFunc(JSON.parse(lsData));
        } else {
            const response = await axios.get(url);
            console.log(response);
            setFunc(response.data);
            if (!dataName) return;
            localStorage.setItem(dataName, JSON.stringify(response.data.data));
            console.log(url);
            console.log(response);
        }
    } catch (error) {
        errFunc(error);
        console.log(error.stack);
    } finally {
        loadFunc(false);
    }
}
export default GetData;
