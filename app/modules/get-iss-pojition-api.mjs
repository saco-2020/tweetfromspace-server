import request from 'request';

const options = {
        url: 'http://api.open-notify.org/iss-now.json/',
        method: 'GET'
}

export default function json(){ 
        request(options, (error, response, body) => {
        console.log(body);
        });
}