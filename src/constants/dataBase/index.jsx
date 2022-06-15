// import axios from 'axios';
// import { useContext, useState } from 'react';
// import { Context } from '../DataContext';
// /**
//  * get data for each database request, put to localstorage
//  *
//  */
//  function dataBase(ROUTES_PATH) {
//     console.log('dataBase func');
//     const {
//         setDataMain,
//         setDataActivity,
//         setDataPerformance,
//         setDataSessions,
//         setError,
//         setLoading,
//     } = useContext(Context);

//     const lsMain = localStorage.getItem('dataMain');
//     const lsActvity = localStorage.getItem('dataActivity');
//     const lsSessions = localStorage.getItem('dataSessions');
//     const lsPerformance = localStorage.getItem('dataPerformance');

//     //generic function for parse ls
//     async function getData(lsData, setFunc, url, dataName) {
//         try {
//             console.log('getData func');

//             if (lsData) {
//                 console.log('from LS');
//                 setFunc(JSON.parse(lsData));
//             } else {
//                 const response = await axios.get(url);
//                 console.log(response);
//                 setFunc(response.data);
//                 if (!dataName) return;
//                 localStorage.setItem(
//                     dataName,
//                     JSON.stringify(response.data.data)
//                 );
//                 console.log(url);
//                 console.log(response);
//             }
//         } catch (error) {
//             setError(error);
//             console.log(error.stack);
//         } finally {
//             setLoading(false);
//         }
//     }

//      getData(
//         lsMain,
//         setDataMain,
//         ROUTES_PATH['USER_MAIN_DATA'],
//         'dataMain'
//     );
//      getData(
//         lsActvity,
//         setDataActivity,
//         ROUTES_PATH['USER_ACTIVITY'],
//         'dataActivity'
//     );
//      getData(
//         lsSessions,
//         setDataSessions,
//         ROUTES_PATH['USER_AVERAGE_SESSIONS'],
//         'dataSessions'
//     );
//      getData(
//         lsPerformance,
//         setDataPerformance,
//         ROUTES_PATH['USER_PERFORMANCE'],
//         'dataPerformance'
//     );

//     return <></>;
// }

// export default dataBase;
