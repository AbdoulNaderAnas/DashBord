let superAdmin ={username: "anas",email:"abdoulans@gmail.com",password:"anas"}
localStorage.setItem('root', JSON.stringify(superAdmin))
let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector("#password").value
    recup = JSON.parse(localStorage.getItem("root"))

    if (
        username === recup.username && email === recup.email && password === recup.password
    ){
        alert("corect")
        window.location.href = "index2.html"
    } else{
        alert("Info incorrect")
        window.location.reload()
    }
})






