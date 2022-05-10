import fetch from 'node-fetch';


console.log(`Your environment is ${JSON.stringify(config.env)}`); // dev
try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/users/1435435');
    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        console.log(JSON.stringify(response.ok));
    }
} catch (error) {
    // again checks
    // catch error and send proper response
    console.log(JSON.stringify(error));
}


