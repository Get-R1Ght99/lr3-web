var loginButton = document.getElementById("openAuthForm_button");
var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm")
var formContainer = document.getElementById("form_container");
var closeForm_button1 = document.getElementById("closeForm_button1");
var closeForm_button2 = document.getElementById("closeForm_button2");
var toggleToSignupForm = document.getElementById("toggle_toSignupForm");
var toggleToLoginForm = document.getElementById("toggle_toLoginForm");
var signupPasswordInput = document.getElementById("signupForm_password");
var signupPasswordRepeatInput = document.getElementById("signupForm_passwordRepeat");


loginButton.onclick = function () {
    formContainer.classList.add("active");
    loginForm.classList.add("active");
}

closeForm_button1.onclick = function () {
    formContainer.classList.remove("active");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
}

closeForm_button2.onclick = function () {
    formContainer.classList.remove("active");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
}

toggleToSignupForm.onclick = function () {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

toggleToLoginForm.onclick = function () {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}


async function authorizationDataSend(e) {
    e.preventDefault();

    if (e.target.id === "signupForm") {
        if (!(signupPasswordRepeatInput.value == signupPasswordInput.value)) {
            alert("Пароли не совпадают");
            return;
        }
    }

    let formData = new FormData(this);

    let response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        let result = await response.json();
        console.log(result.form);
    }
    else {
        alert('Ошибка HTTP: ' + response.status);
    }
}

loginForm.addEventListener("submit", authorizationDataSend);
signupForm.addEventListener("submit", authorizationDataSend);