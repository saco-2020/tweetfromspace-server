import request from 'request-promise-native';

let URL = 'http://api.open-notify.org/iss-now.json/';

export function translate (){
        return new Promise((result,reject) => {
                request(URL)
                .then((html) => {
                        result(html);
                        return;
                })
                .then((err)=>{
                        reject(err);
                        return;
                })
                .finally(()=>{
                        console.log("Promise secance finaly");
                });
        });

}