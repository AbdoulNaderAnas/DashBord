let superAdmin ={username: "anas",email:"abdoulans@gmail.com"}
localStorage.setItem('root', JSON.stringify(superAdmin))
let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    recup = JSON.parse(localStorage.getItem("root"))

    if (
        username === recup.username && email === recup.email 
    ){
        alert("corect")
        window.location.href = "index1.html"
    } else{
        alert("Info incorrect")
        window.location.reload()
    }
})
