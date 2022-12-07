const setlocalStorage = (token, username, role, _id) => {
    localStorage.setItem("login", true);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    localStorage.setItem("id", _id);
}

export default setlocalStorage