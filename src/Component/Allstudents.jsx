import React, { useContext,useEffect } from "react";
import {Studentcontext} from '../App';

function Allstudents() {
    let context = useContext(Studentcontext);
    return (<div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Age</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                    <th scope="col">Degree</th>
                    <th scope="col">More Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    context.students.map((student,key)=>
                    {

                        return <tr>
                            <th scope="row">{key+1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                            <td>{student.department}</td>
                            <td>{student.email}</td>
                            <td>{student.degree}</td>
                            <td>
                            <button className="btn btn-secondary mx-3">Edit</button>
                            <button className="btn btn-danger mx-3">Delete</button>
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
    );

}

export default Allstudents;