import axios from 'axios';



export default axios.create({
    baseURL: 'http://universities.hipolabs.com/search?country=United+States',
    params: {
        offset: 1,
        limit: 10,
       
    }
})



