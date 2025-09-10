import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page of my React Router demo.</p>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}

export default Home;
