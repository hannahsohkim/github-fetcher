import React from 'react';
import styled from 'styled-components';

const RepoList = (props) => {
  const Header = styled.div`
    border: 1px solid #99999;
    border-radius: 3px;
  `;

  return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    {props.repos.map((repo)=> {
        return (
        <Header>
          <p>Username: {repo.ownerLogin}</p>
          <p>Repo Name: {repo.repoName}</p>
          <p>Description: {repo.description}</p>
          <p>URL: {repo.htmlUrl}</p>
        </Header>
        )
      })
      }
    </div>
  </div>
)}

export default RepoList;