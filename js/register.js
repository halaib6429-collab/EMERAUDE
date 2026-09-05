let username = document.querySelector("#username")
let username2 = document.querySelector("#username2")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#sign_up")

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value ==="" || username2.value ==="" || email.value ==="" || password.value === ""){
        alert("please fill data")
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("username2",username2.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        alert("Account Creating Successfully!")

        setTimeout(() => {
            window.location ="login.html"
        },1500)
    }
})
let firstform = document.querySelector(".form1")
let secondform = document.querySelector(".form2")
let cont = document.querySelector(".container")
let signupBtn = document.querySelector("#signup_btn")

signupBtn.addEventListener("click", function(e){
    e.preventDefault()

    cont.classList.toggle("active")
})