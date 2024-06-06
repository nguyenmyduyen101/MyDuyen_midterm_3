import React from "react";

const Repos = ({ repos }) => {
    return (
        <div className="card text-body">
            <h3>Latest Repositories</h3>
            {repos.map((repo) => (
                <div key={repo.id} className="list-group">
                    <div className="list-group-item">
                        <div>
                            <h4>
                                <a href={repo.html_url} target="_blank" rel="noreferrer">
                                    {repo.name}
                                </a>
                            </h4>
                            <p>{repo.description}</p>
                        </div>
                        <div>
                            <span className="badge bg-primary mr-1">
                                Stars: {repo.stargazers_count}
                            </span>
                            <span className="badge bg-secondary mr-1">
                                Watchers: {repo.watchers_count}
                            </span>
                            <span className="badge bg-info mr-1">Forks: {repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Repos;