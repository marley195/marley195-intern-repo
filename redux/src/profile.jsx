import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page of my React Router demo.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Profile;
