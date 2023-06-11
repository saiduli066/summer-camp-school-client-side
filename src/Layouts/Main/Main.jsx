// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../../shared/Navbar";
// import Footer from "../../shared/Footer";

// const Main = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Main;


import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { useTheme } from "../../hooks/useTheme";

const Main = () => {
  const [theme, toggleTheme] = useTheme(); 
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} /> 
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
