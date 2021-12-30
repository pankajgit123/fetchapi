import fetch from 'node-fetch';
import config from './config.js';

console.log(`Your environment is ${JSON.stringify(config.env)}`); // dev

try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/users/1435435');

    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        // response.ok = false
        // please recheck
        console.log(JSON.stringify(response.ok));
    }
    const res = await getJokes();
    console.log(res);
} catch (error) {
    // again checks
    // catch error and send proper response
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


