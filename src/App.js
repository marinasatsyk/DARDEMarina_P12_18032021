import logo from './logo.svg';
import './App.css';
// import apiDatabase from './api/API_Database.js';
// import  PropTypes  from 'prop-types';

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

/**
 * App
 * @returns quedale
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App.propTypes = {
//   name: PropTypes.string,
// }
export default App;
