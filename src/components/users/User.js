import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser, getUserRepos } from '../../api/api';
import Repos from '../repos/Repos';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userData, userReposData] = await Promise.all([getUser(id), getUserRepos(id)]);
                setUser(userData);
                setRepos(userReposData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, [id]);

    const {
        name, avatar_url, location, bio, company, blog, login, html_url,
        followers, following, public_repos, public_gists, hireable
    } = user;

    return (
        <>
            <Link to="/" className="btn">Back to Search</Link>
            <div>Hireable: {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}</div>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt={name} className="round-img" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && <><h3>Bio:</h3><p>{bio}</p></>}
                    <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">
                        Show Github Profile
                    </a>
                    <ul>
                        {login && <li><strong>Username: </strong>{login}</li>}
                        {company && <li><strong>Company: </strong>{company}</li>}
                        {blog && <li><strong>Website: </strong><a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a></li>}
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Repository: {public_repos}</div>
                <div className="badge badge-dark">Gist: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </>
    );
};

export default User;