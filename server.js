import fetch from 'node-fetch';
import config from './config.js';

console.log(`Your environment is ${JSON.stringify(config.env)}`); // dev

try {
    const response = await fetch(resource);
    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    }
    const res = await getJokes();
    console.log(res);
} catch (error) {
    console.log(JSON.stringify(error));
}

let getJokes = async() => {
    console.log(12);
     const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (response && response.ok) {
        const data = await response.json();
        return data;
    }
}


