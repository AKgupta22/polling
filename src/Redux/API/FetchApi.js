import axios from "axios";
const FetchApi = async (query) => axios.get(`https://etechpolltesting.onrender.com/${query}`)
    .then(response => response)
    .catch(error => error)

export default FetchApi