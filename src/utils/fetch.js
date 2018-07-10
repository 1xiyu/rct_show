import axios from 'axios';

export default function Request(options) {
    return axios(options).then(res => {
        //TODO some strange situation
        return Promise.resolve(res);
    }).catch(err => {
        //TODO handle error for monitor 
        console.log('Ajax Error', options);
        return Promise.resolve(err);
    })
}
