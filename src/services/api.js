import axios from 'axios'

const api = axios.create({ // axios.create cria uma instancia do axios.
    baseURL: "http://localhost:3333"
})

export default api