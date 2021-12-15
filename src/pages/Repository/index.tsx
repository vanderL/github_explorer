import React from "react";
import { Link } from 'react-router-dom';

const Repository: React.FC = () => {
  return (
    <div>
      <h1> Você ta no Repository</h1>
      <Link to="/"> Dashboard </Link>
    </div>
  )
}

export default Repository;