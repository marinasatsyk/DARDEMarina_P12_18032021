// import apiDatabase from './api/API_Database.js';
import PropTypes from 'prop-types';

import { Component } from 'react';
import useFetch from '../../../constants/useFetch';

function Main() {
    const { data, loading, error } = useFetch('http://localhost:3000/user/12');

    if (loading) return <h1>LOADING...</h1>;
    if (error) return console.log(error);
    return (
        <div className="main">
            <h1>{data?.data.id}</h1>
        </div>
    );
}

export default Main;

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
