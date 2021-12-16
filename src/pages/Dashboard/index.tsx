import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { Title, Form, Repository, Error } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputErrorRepo, setInputErrorRepo] = useState('');
  const [inputErrorOwner, setInputErrorOwner] = useState('');
  const [ownerRepo, setOwnerRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
  });

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setInputErrorRepo('');
    setInputErrorOwner('');

    if (!ownerRepo.trim()) {
      setInputErrorOwner('Digite o nome do proprietario');
      return;
    };

    if (!newRepo.trim()) {
      setInputErrorRepo('Digite o nome do repositório');
      return;
    };

    try {
      const response = await api.get<Repository>(`repos/${ownerRepo}/${newRepo}`)

      const repository = response.data;
      console.log(repository.owner)

      setRepositories([...repositories, repository]);
    } catch (error) {
      const messagem = "Erro na busca";
      setInputErrorRepo(messagem);
      setInputErrorOwner(messagem);
    }
  }

  useEffect(() => {
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Você ta no Dashboard</Title>

      <Form hasError={!!inputErrorRepo || !!inputErrorOwner} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do proprietario"
          value={ownerRepo}
          onChange={(e) => setOwnerRepo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputErrorRepo &&
        <Error>
          {inputErrorRepo}
        </Error>
      }
      {inputErrorOwner &&
        <Error>
          {inputErrorOwner}
        </Error>
      }

      <Repository>
        {repositories.map(repository => (
          <Link key={repository.full_name} to="/repository" >
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repository>


    </>
  )
}

export default Dashboard;