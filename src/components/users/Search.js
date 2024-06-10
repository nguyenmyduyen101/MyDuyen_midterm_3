import React, { useState } from 'react';
import { searchUsers } from '../../api/api';
import Users from './Users';
const Search = () => {
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);
    const handleSearchUsers = async (text) => {
        try {
            const result = await searchUsers(text);
            setUsers(result.items);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const clearUsers = () => setUsers([]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (text) {
            handleSearchUsers(text);
            setText('');
        } else {
            alert('Please enter something');
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-success btn-block"
                />
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