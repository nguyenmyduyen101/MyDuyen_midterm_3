import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => (
    <div className="card">
        <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
            </a>
        </h3>
        {repo.description && <p>{repo.description}</p>}
    </div>
);

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;