// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import { FaUserCircle } from "react-icons/fa";

// //..
 
// //


// const Navbar = () => {

//     // const { user, logOut } = useContext(AuthContext);
//     // console.log(user);
//     const user = false;

//                    /**NavBar**/
//   return (
//     <div className="navbar bg-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 "
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link to="/" className="font-[600] ">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/instructors" className="font-[600] ">
//                 Instructors
//               </Link>
//             </li>
//             <li>
//               <Link to="/classes" className="font-[600] ">
//                 Classes
//               </Link>
//             </li>
//             <li>
//               <Link to="/dashboard" className="font-[600] ">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link className="text-xl  font-[600]">
//                 {user ? (
//                   <>
//                     <img
//                       className="w-8 h-8 rounded-full"
//                       src={user?.photoURL}
//                       title={user.displayName}
//                       alt=""
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <FaUserCircle className="w-7 h-7" />
//                   </>
//                 )}
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <img src={logo} alt="image" className="w-12 h-12 me-0 rounded-full" />
//         <Link
//           className=" normal-case  text-xl md:text-3xl ms-7 md:ms-2 font-[700]"
//           to="/"
//         >
//           Lingui
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link to="/" className="font-[600] ">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/instructors" className="font-[600] ">
//               Instructors
//             </Link>
//           </li>
//           <li>
//             <Link to="/classes" className="font-[600] ">
//               Classes
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard" className="font-[600] ">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link className="text-xl  font-[600]">
//               {user ? (
//                 <>
//                   <img
//                     className="w-8 h-8 rounded-full"
//                     src={user?.photoURL}
//                     title={user.displayName}
//                     alt=""
//                   />
//                 </>
//               ) : (
//                 <>
//                   <FaUserCircle className="w-7 h-7" />
//                 </>
//               )}
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <button
//             className="btn btn-secondary md:text-xl "
//           >
//             Logout
//           </button>
//         ) : (
//           <Link to="/login" className="btn btn-success md:text-xl text-white">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

/* eslint-disable no-unused-vars *//* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

//..

//

const Navbar = ({ theme, toggleTheme }) => {
 
  // const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const user = false;

  /**NavBar**/
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="font-[600] ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/instructors" className="font-[600] ">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes" className="font-[600] ">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="font-[600] ">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-xl font-[600]">
                {user ? (
                  <>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.photoURL}
                      title={user.displayName}
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <FaUserCircle className="w-7 h-7" />
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <img src={logo} alt="image" className="w-12 h-12 me-0 rounded-full" />
        <Link
          className=" normal-case  text-xl md:text-3xl ms-7 md:ms-2 font-[700]"
          to="/"
        >
          Lingui
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="font-[600] ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="font-[600] ">
              Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes" className="font-[600] ">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="font-[600] ">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-xl font-[600]">
              {user ? (
                <>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    title={user.displayName}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <FaUserCircle className="w-7 h-7" />
                </>
              )}
            </Link>
          </li>
        </ul>

       
        <button
          className="btn btn-circle btn-sm btn-primary ml-2"
          onClick={toggleTheme} // call the toggleTheme function
        >
          {theme === "light" ? "🌙" : "☀️"} 
        </button>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            className="btn btn-secondary md:text-xl "
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-success md:text-xl text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
