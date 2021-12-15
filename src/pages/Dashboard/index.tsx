import React from "react";
import { Link } from 'react-router-dom';
import { Title } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Title> Você ta no Dashboard</Title>
      <Link to="/repository" > Repository </Link>
    </div>
  )
}

export default Dashboard;