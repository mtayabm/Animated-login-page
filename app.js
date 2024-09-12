const contanier = document.getElementById("conatanier")
const registration = document.getElementById("register")
const loginbtn = document.getElementById("login")

registration.addEventListener('click', () => {
    contanier.classList.add("active")
});

loginbtn.addEventListener('click', () => {
    contanier.classlist.remove("active")
});