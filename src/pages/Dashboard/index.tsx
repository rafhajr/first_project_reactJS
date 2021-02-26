import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositórios no GitHub</Title>

      <Form >
        <input placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teeste'>
          <img src='https://avatars.githubusercontent.com/u/14079111?s=460&u=eaa08c40a5e54f2ab01adbf6a954835156d981d1&v=4'
            alt='Rafhael Souza'
          />
          <div>
            <strong>first_project_reactJS</strong>
            <p>My first project in ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href='teeste'>
          <img src='https://avatars.githubusercontent.com/u/14079111?s=460&u=eaa08c40a5e54f2ab01adbf6a954835156d981d1&v=4'
            alt='Rafhael Souza'
          />
          <div>
            <strong>first_project_reactJS</strong>
            <p>My first project in ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href='teeste'>
          <img src='https://avatars.githubusercontent.com/u/14079111?s=460&u=eaa08c40a5e54f2ab01adbf6a954835156d981d1&v=4'
            alt='Rafhael Souza'
          />
          <div>
            <strong>first_project_reactJS</strong>
            <p>My first project in ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
