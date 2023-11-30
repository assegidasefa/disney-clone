import axios from "axios";
const movieBaseUrl ="https://api.themoviedb.org/3"
const api_key = "6b91bbb796d25886cdf8234d19245638"

const getTrendingVideo=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);


export default {
    getTrendingVideo
}