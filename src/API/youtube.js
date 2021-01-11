import axios from 'axios';
const KEY = "AIzaSyApto1r-laslJ1V3UMsOAcY8-O_wEFvzow";


export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3" ,
    params : {
        part : 'snippet' ,
        maxResults : 5 ,
        key : KEY
    }
});