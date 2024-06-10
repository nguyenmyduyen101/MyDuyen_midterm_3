import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { searchUsers } from '../../api/api';
import Users from './Users';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Search = () => {
    const query = useQuery();
    const history = useHistory();
    const [text, setText] = useState(query.get('q') || '');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const queryText = query.get('q');
        if (queryText) {
            handleSearchUsers(queryText);
        }
    }, []); // Empty dependency array means this effect runs only once after initial render

    const handleSearchUsers = async (text) => {
        try {
            const result = await searchUsers(text);
            setUsers(result.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const clearUsers = () => {
        setUsers([]);
        setText('');
        history.push({ search: '' });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text) {
            handleSearchUsers(text);
            history.push({ search: `?q=${text}` });
        } else {
            alert('Please enter something');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    placeholder="Search User"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Search" className="btn btn-success btn-block" />
            </form>
            {users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>
                    Clear
                </button>
            )}
            <Users users={users} />
        </div>
    );
};

export default Search;