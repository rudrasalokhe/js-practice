async function signup(){
    const username = document.getElementById('uid').value;
    const password = document.getElementById('pass').value;
    await axios.post("http://localhost:3002/", {
        username : username, 
        password : password
    })
}