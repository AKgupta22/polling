import axios from "axios";
const FetchApiHeader = async (query, token) => {
  const config = {
    headers: {
      "access-token": token
    }
  }
  const response = axios.get(`https://etechpolltesting.onrender.com/${query}`, config).then(response => response)
    .catch(error => error)
  return response
}

export default FetchApiHeader
