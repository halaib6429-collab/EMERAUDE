let username = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")
let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")


let firstform = document.querySelector(".form1")
let secondform = document.querySelector(".form2")
let cont = document.querySelector(".container")
let signupBtn = document.querySelector("#signup_btn")

signupBtn.addEventListener("click", function(e){
    e.preventDefault()

    cont.classList.toggle("active")
})


loginBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(email.value === "" || password.value === ""){
        alert("please fill data")
    }else{
        if(getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value){
            setTimeout(() => {
                window.location = "index.html"
            },1500)
        }else{
            alert("Email or password is wrong")
        }
    }
})