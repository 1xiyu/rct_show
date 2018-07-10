import Request from '$src/utils/fetch';

export default ( {
    getHomeData: function () {
        return Request({
            method: 'get',
            url: 'https://www.apiopen.top/satinApi?type=1&page=1'
        })
    }
})
