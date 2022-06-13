// import apiDatabase from './api/API_Database.js';
//`http://localhost:3000/user/${userId}`
// import PropTypes from 'prop-types';

// import { Component } from 'react';
// import useAxios from '../../../constants/useAxios';
// import Aside from '../../aside';
// import Header from '../../header';

// function Main() {
//     const {
//         data: MainData,
//         loading,
//         error,
//     } = useAxios('http://localhost:3000/user/12/activity');

//     if (loading) return <h1>LOADING...</h1>;
//     if (error) return console.log(error);
//     return (
//         <div className="wrapper_main">
//             <h1>{MainData?.data.userId}</h1>
//             <Header />
//             <div className="wrapper_body">
//                 <Aside />
//             </div>
//         </div>
//     );
// }

// export default Main;

/*
  const apiDatabase = {
    getUser : async (id)  => {
      const result = await fetch("http://localhost:3000/user/"+id)
      return result:
    },
    setUser : (name)  =>{
      fetch() ...
    }
  }
  export default apiDatabase;

  const [users, setUsers] = useState([])
  const setUsers(apiDatabase.getUsers())
  
*/
