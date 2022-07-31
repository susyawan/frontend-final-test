import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/css/styles.css'

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid bg-light shadow">
        <div className="navbar container navbar-expand-lg bg-light px-3">
          <button
            className="btn btn-light d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand">
            Logo
          </a>

          <div className="offcanvas offcanvas-start" id="offcanvasExample">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title">Logo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="offcanvas-body navbar-nav justify-content-lg-end">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="navbar-nav flex-row">
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/" className="nav-link">
                  Order
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/" className="nav-link">
                  Username
                </a>
              </li>
              <li className="nav-item mx-2 mx-lg-0">
                <a href="/" className="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import { userContext } from "../App";

// const Navbar = () => {
//   const { state, dispatch } = useContext(userContext);
//   if (state) {
//     return (
//       <>
//         <nav>
//           <div className="container">
//             <button>X</button>
//             <div className="collapse navbar-collapse justify-content-between">
//               <ul>
//                 <li>
//                   <a href="/">X</a>
//                 </li>
//                 <div>
//                   <li>
//                     <NavLink>
//                       Home <span>(current)</span>
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink>About</NavLink>
//                   </li>
//                   <li>
//                     <NavLink>Contact</NavLink>
//                   </li>
//                 </div>
//               </ul>

//               <NavLink>Deliveryess</NavLink>

//               <ul>
//                 <div>
//                   <li>
//                     <NavLink>Order</NavLink>
//                   </li>
//                   <li>
//                     <NavLink>X{localStorage.getItem("username")}</NavLink>
//                   </li>
//                   <li>
//                     <NavLink>Logout</NavLink>
//                   </li>
//                 </div>
//                 <li>
//                   <a href="/">X</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg">
//           <div className="container">
//             <button>X</button>
//             <div className="collapse navbar-collapse justify-content-between">
//               <ul>
//                 <li>
//                   <a href="/">X</a>
//                 </li>
//                 <div>
//                   <li>
//                     <NavLink>
//                       Home <span>(current)</span>
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink>About</NavLink>
//                   </li>
//                   <li>
//                     <NavLink>Contact</NavLink>
//                   </li>
//                 </div>
//               </ul>

//               <NavLink>Deliveryess</NavLink>
//               <ul>
//                 <div>
//                   <li>
//                     <NavLink>Order</NavLink>
//                   </li>
//                   <li>
//                     <NavLink>Sign In</NavLink>
//                   </li>
//                 </div>
//                 <li>
//                   <a href="/">X</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// };
