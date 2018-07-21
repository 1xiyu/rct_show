import Request from '$utils/fetch';

export default ( {
    getHomeData: function () {
        return Request({
            method: 'get',
            // url: 'https://www.apiopen.top/satinApi?type=1&page=1'
            url: 'http://localhost:3000/static/test.json'
        })
    }
})
