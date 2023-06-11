/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Teachers = () => {
    const [teachers, SetTeachers] = useState([]);

    useEffect(() => {
         axios
           .get("https://summer-camp-server-side-seven.vercel.app/teachers")
           .then((response) => {
             SetTeachers(response.data.teachers);
           })
           .catch((error) => {
             console.error("Error fetching teachers:", error);
           });
    },[])
    return (
      <div>
        <h2 className="text-3xl font-[600] text-center my-4 md:my-10">
          Our Teachers
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2  md:gap-4 p-3 ">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="card w-80 md:w-96 bg-base-100 mx-auto shadow-xl"
            >
              <figure className="px-4 pt-4">
                <img
                  src={teacher.image}
                  alt=""
                  className="object-contain w-full h-[295px] rounded-xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{teacher.name}</h2>
                <p>
                  <span className="font-[500]">Email:</span>
                  {teacher.email}
                </p>
                <p>
                  <span className="font-[500]">Class:</span>
                  {teacher.class} language
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Teachers;