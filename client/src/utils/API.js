// import axios from "axios";
// let groups = ["Austin-Women-in-Technology", "austinwomentech", "Women-Who-Code-Austin", "Austin-Women-in-Machine-Learning-Data-Science"];
// const BASEURL = "https://api.meetup.com/2/events?key="+ APIKEY + "&group_urlname=" + groups + "=true";

// https://api.meetup.com/Women-Who-Code-Austin/events?&sign=true&photo-host=public&page=5

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + APIKEY);
//   }
// };

// to access these in the JSON  
// this is all under the array index... 0.name, etc?
// event name = "name"
// time = "local_time"
// date = "local_date"

// groups.name to get name

import axios from 'axios';
const BASEURL = 'https://api.meetup.com/2/events?key=' + APIKEY + '&group_urlname=' + group + '&sign=true&photo-host=public&page=5';
const APIKEY = '?key=1ce5144155b5f7b4d775c446d374e78';

export default {
    search: function(group) {
        return axios.get(BASEURL)
    }
};


