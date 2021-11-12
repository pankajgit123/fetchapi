import fetch from 'node-fetch';

try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/users/1');
    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        // response.ok = false
        console.log(JSON.stringify(response.ok));
    }
} catch (error) {
    // catch error and send proper response
    console.log(JSON.stringify(error));
}


