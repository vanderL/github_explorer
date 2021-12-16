import React from "react";
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { Title, Form, Repository } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Você ta no Dashboard</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        <Link to="/repository" >
          <img src="https://avatars.githubusercontent.com/u/12676148?v=4" alt="Vander" />
          <div>
            <strong>vanderL/github-explorer</strong>
            <p>Testing react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

        <Link to="/repository" >
          <img src="https://avatars.githubusercontent.com/u/12676148?v=4" alt="Vander" />
          <div>
            <strong>vanderL/github-explorer</strong>
            <p>Testing react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

        <Link to="/repository" >
          <img src="https://avatars.githubusercontent.com/u/12676148?v=4" alt="Vander" />
          <div>
            <strong>vanderL/github-explorer</strong>
            <p>Testing react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

        <Link to="/repository" >
          <img src="https://avatars.githubusercontent.com/u/12676148?v=4" alt="Vander" />
          <div>
            <strong>vanderL/github-explorer</strong>
            <p>Testing react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Repository>


    </>
  )
}

export default Dashboard;