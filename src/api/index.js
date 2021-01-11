import axios from 'axios';

//Base API URL
var URL = 'http://localhost:8000';

export function login(email, password) {
    return new Promise((resolve, reject) => {
        var url = `${URL}/accounts/login`;
        axios.post(url, {
            email: email, 
            password: password
        })
        .then((response) => {
            resolve(response);
        })
        .catch((err) => reject(err));
    })
}

export function register(fullName, email, password) {
    return new Promise((resolve, reject) => {
        var url = `${URL}/accounts/register`;
        axios.post(url, {fullName, email, password})
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    })
}

export function getTasks() {
    return new Promise((resolve, reject) => {
        var url = `${URL}/tasks/alltasks`;
        axios.get(url)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => reject(err));
    })
}

export function addTask (title, description, deadline) {
    return new Promise((resolve, reject) => {
        var url = `${URL}/tasks/create/account`;
        axios.post(url, {title:title, description:description, deadline:deadline})
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    })
}