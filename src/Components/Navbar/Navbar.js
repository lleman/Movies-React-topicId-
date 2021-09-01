import React from "react";
import "./Navbar.css";
import { useState } from "react";
import {Link} from "react-router-dom"

function Navbar() {
//   const [user, setUser] = useState([
//     {
//       name: "Laman",
//       job: "Developer",
//       id: 1,
//     },
//     {
//       name: "Samir",
//       job: "Programmer",
//       id: 2,
//     },
//   ]);
  return (
      <div className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

      {/* {user.map((e) => {
        return <h1 key={e.id}>{e.name}</h1>;
      })} */}
    </div>
  );
}

export default Navbar;
