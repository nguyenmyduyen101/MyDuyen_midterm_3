import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const fetchData = async (url) => {
    try {
        const response = await axios.get(`${BASE_URL}${url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const searchUsers = (text) => fetchData(`/search/users?q=${text}`);
export const getUser = (username) => fetchData(`/users/${username}`);
export const getUserRepos = (username) => fetchData(`/users/${username}/repos`);