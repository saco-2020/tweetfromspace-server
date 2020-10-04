const request = require('request');

const options = {
        url: 'http://api.open-notify.org/iss-now.json/',
        method: 'GET'
}

let json;
json = request(options, (error, response, body) => {
        console.log(body);
        return body;
});

module.exports = json;