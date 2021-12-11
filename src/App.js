import './App.css';
import React, { useState } from 'react';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Addstudent from './Component/Addstudent';
import Allstudents from './Component/Allstudents';

let Studentcontext =  React.createContext();

function App() {
  //This is the data we will be sending to dashboard component via routes
  
  let data = {earning:"30,000",annual:"3,60,000",task:20,pending:26};

  //Temporary JSON data which will be passed to other component
  const [students,setStudents] = useState([
    {
       "firstName" : "Chaitanya",
       "lastName" : "Mendule",
       "age" :  "25",
       "department": "Civil",
       "email": "cmendule@live.com",
       "degree" : "BE"
    },
    {
       "firstName" : "Darshan",
       "lastName": "Raut",
       "age" :  "27",
       "department": "Computer",
       "email": "darshanraut123@live.com",
       "degree" : "BE"
    }
    ,
    {
       "firstName" : "Akshay",
       "lastName" : "Kadu",
       "age" :  "29",
       "department": "Mechanical",
       "email": "akadu@live.com",
       "degree" : "BTEC"
    }]);


  return (
    <div className="App">
      <Router >
        <div style={{ display: "grid", gridTemplateColumns: "17% 83%"}} className="pr-3">
            {/*This sidebar component will be always visible*/}
          <div><Sidebar /></div>
          <Studentcontext.Provider value={{students,setStudents}}>
            {/*Using routes tag we are implementing redirects*/}
            <Routes>
            {/*When base url appended with /dashboard then Dashboard component will be active. We are passing data through props*/}
            <Route path='/' element={<Dashboard value={data}/>}></Route>
            {/*When base url appended with /allstudents then Allstudent component will be active*/}
            <Route path='/allstudents' element={<Allstudents/>}></Route>
            {/*When base url appended with /addstudent then Addstudent component will be active*/}
            <Route path='/addstudent' element={<Addstudent/>}></Route>
            </Routes>
          </Studentcontext.Provider>
        </div>
      </Router>
    </div>
  );
}

export {Studentcontext};
export default App;
