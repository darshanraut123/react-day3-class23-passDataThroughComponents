import React, { useContext, useState } from 'react';
import { Studentcontext } from '../App';


//This is the add student component which will return a simple div with text Add student
function Addstudent() {
    let context = useContext(Studentcontext);

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [degree, setDegree] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");

    let handleSave = () => {
        
        context.students.push({
            firstName,
            lastName,
            mobile,
            email,
            degree,
            age,
            department
        });
    }

    return (
        <div>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input onChange={(event) => { setFirstname(event.target.value) }} type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="Enter First Name" />
            </div>

            <div className="form-group">
                <label for="firstName">Last Name</label>
                <input onChange={(event) => { setLastname(event.target.value) }} type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Enter Last Name" />
            </div>

            <div className="form-group">
                <label for="age">Age</label>
                <input onChange={(event) => { setAge(event.target.value) }} type="number" className="form-control" id="age" aria-describedby="ageHelp" placeholder="Enter age" />
            </div>

            <div className="form-group">
                <label for="mobile">Mobile</label>
                <input onChange={(event) => { setMobile(event.target.value) }} type="number" className="form-control" id="mobile" aria-describedby="mobileHelp" placeholder="Enter Mobile" />
            </div>

            <div className="form-group">
                <label for="department">Department</label>
                <input onChange={(event) => { setDepartment(event.target.value) }} type="text" className="form-control" id="department" aria-describedby="departmentHelp" placeholder="Enter department" />
            </div>

            <div className="form-group">
                <label for="email">Email</label>
                <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label for="degree">Degree</label>
                <input onChange={(event) => { setDegree(event.target.value) }} type="text" className="form-control" id="degree" aria-describedby="degreeHelp" placeholder="Enter degree" />
            </div>

            <button onClick={handleSave} className="btn btn-primary">Submit</button>
        </div>
        );

}

export default Addstudent;