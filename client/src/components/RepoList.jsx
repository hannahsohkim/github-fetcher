import React from 'react';

const RepoList = (props) => {
  console.log(props.repos, 'REPO')
  return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    {props.repos.map((repo)=> {
        return (<div>
          <p>Username: {repo.ownerLogin}</p>
          <p>Repo Name: {repo.repoName}</p>
          <p>Description: {repo.description}</p>
          <p>URL: {repo.htmlUrl}</p>
          </div>
        )
      })
      }
    </div>
  </div>
)}

export default RepoList;