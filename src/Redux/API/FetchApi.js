const FetchApi = async (query) => {
    try {
        const getData = await fetch(`https://etechpolltesting.onrender.com/${query}`, {
            headers: {
                'access_token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMTgyYzU5NTI3ZmUwMDEyMzcwN2IyIiwiaWF0IjoxNTEwMDQ4NDY4LCJleHAiOjE1MTM2NDg0Njh9.DG93Hq-Fde9kNZbgnr34l2dZyeEYyJ0OfD_9yZK1JCQ"
            }
        })
        const result = await getData.json()
        return result
    }
    catch (error) {
        return error
    }
}
export default FetchApi