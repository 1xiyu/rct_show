import axios from 'axios';

export default ( {
    getHomeData: function () {
        return axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res => {
            return Promise.resolve(res);
        }).catch(error => {
            return Promise.resolve(error);
        });
    }
})
