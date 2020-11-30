import axios from 'axios';

//API URL
const URL = 'http://localhost:6000';

export function login(email, password) {
    return new Promise((resolve, reject) => {
        const url = `${URL}/account/login`;
        axios.post(url, {email, password})
            .then((response) => {
                resolve(response);
            })
            .catch((err) => reject(err));
    })
}