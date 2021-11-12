import fetch from 'node-fetch';

try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/users/1435435');
    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        // response.ok = false
        console.log(JSON.stringify(response.ok));
    }
} catch (error) {
    console.log(JSON.stringify(error));
}


