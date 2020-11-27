import axios from 'axios'


// http://192.168.43.159:5000
//https://staff-manager-server.herokuapp.com
//http://localhost:5000

const instance = axios.create({ // this is our config
    baseURL:  "https://staff-manager-server.herokuapp.com"   
})


instance.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token')
       
        
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },


    (err) => {
        return Promise.reject(err)
    }
)


export default instance

















// // making request without header(Authorization )
// export default axios.create({
//     baseURL: "http://07f66d3d1ff9.ngrok.io"
// })