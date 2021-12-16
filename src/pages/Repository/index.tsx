import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

interface RepositoryParam {
  repository: string;

}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  return (
    <div>
      <h1> Você ta no Repository: {params.repository}</h1>
      <Link to="/"> Dashboard </Link>
    </div>
  )
}

export default Repository;