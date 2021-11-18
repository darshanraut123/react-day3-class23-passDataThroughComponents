import './App.css';
import React from 'react';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Addstudent from './Component/Addstudent';
import Allstudents from './Component/Allstudents';

function App() {
  //This is the data we will be sending to dashboard component via routes
  let data = {earning:"30,000",annual:"3,60,000",task:20,pending:26};
  return (
    <div className="App">
      <Router >
        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
            {/*This sidebar component will be always visible*/}
          <div><Sidebar /></div>
          <div>
            {/*Using routes tag we are implementing redirects*/}
            <Routes>
            {/*When base url appended with /dashboard then Dashboard component will be active. We are passing data through props*/}
            <Route path='/dashboard' element={<Dashboard value={data}/>}></Route>
            {/*When base url appended with /allstudents then Allstudent component will be active*/}
            <Route path='/allstudents' element={<Allstudents/>}></Route>
            {/*When base url appended with /addstudent then Addstudent component will be active*/}
            <Route path='/addstudent' element={<Addstudent/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
