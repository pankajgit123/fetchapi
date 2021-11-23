import fetch from 'node-fetch';
import { v4 } from 'uuid';

try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/users/1');
    if (response && response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        // response.ok = false
        // please recheck
        console.log(JSON.stringify(response.ok));
    }
} catch (error) {
    // again checks
    // catch error and send proper response
    console.log(JSON.stringify(error));
}


