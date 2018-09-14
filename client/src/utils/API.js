import axios from 'axios';

const BASEURL = 'https://api.meetup.com/2/events?&sign=true&photo-host=public&page=5&group_urlname='
const APIKEY = '?key=1ce5144155b5f7b4d775c446d374e78';

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY)
    }
};


