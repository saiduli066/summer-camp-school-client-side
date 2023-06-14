/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProviders";

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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

  //................//
  //TODO:  do this in a separate route ..it should in student dashboard.
  // read the requirement no.9.

  const [selectedClass, setSelectedClass] = useState([]);

  useEffect(() => {
    axios
      .get("https://summer-camp-server-side-seven.vercel.app/selectedClasses")
      .then((response) => {
        console.log(response.data);
        // const foundUser = users.find(user => user.email === userEmail);

        const studentInfo = response.data.find(
          (studentData) => studentData.email === user.email
        );
        const studentEmail = studentInfo.email;
        console.log(studentEmail);
        console.log(user.email);
        if (studentEmail === user.email) {
          console.log(studentInfo.selectedClass);
          setSelectedClass(studentInfo.selectedClass.name);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [user]);

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
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {students.map((student, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td> {student?.name}</td>
                <td>{student?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
