/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import UserData from "./components/UserData";
import LoginForm from "./components/LoginForm";
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [isTable,setIsTable] = useState(false);
console.log({isTable})
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length>0){
        setUsers(data);
      }
      console.log(data);
    } catch (e){
      console.error(e)
    }
  }

  useEffect(()=> {
    fetchUsers(API);
  },[])
  return<>
  {isTable === true ?<LoginForm setIsTable={setIsTable}/>:<table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
      <button className="btn btn-delete">
      </button>

    </table>   
    
    }
    
  </>
}
export default App;