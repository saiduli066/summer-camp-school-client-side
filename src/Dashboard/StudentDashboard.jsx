/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const StudentDashboard = () => {
 
  const [students, setStudents] = useState([]);
    useEffect(() => {
      axios
        .get("https://summer-camp-server-side-seven.vercel.app/students")
        .then((response) => {
          setStudents(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }, []);
    return (
      <div>
        <Helmet>
          <title>Student Dashboard - Lingui</title>
        </Helmet>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-gray-100">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Selected CLasses</th>
                <th>Enrolled CLasses</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {students.map((student, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td> {student?.name}</td>
                  <td>{student?.email}</td>
                  <td>{student?.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default StudentDashboard;