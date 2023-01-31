//Variables
const btnLogin = document.querySelector('.btnLogin'),
signUpForm = document.querySelector('.signUpForm'),
LoginForm = document.querySelector('.LoginForm'),
btnSignup = document.querySelector('.btnSignup'),
Formsign = document.querySelector('.Formsign'),
inpSignUp = document.querySelectorAll('.inpSignUp'),
eyeBtn = document.querySelectorAll('.eyeBtn'),
inpLogin = document.querySelectorAll('.inpLogin');
frmLogin = document.querySelector('.frmLogin');


//EventListeners
eyeBtn.forEach(i => {
    i.addEventListener('click' , function(){
        eye(i)
    })
});

Formsign.addEventListener('submit' , function(e){
    e.preventDefault()
    vSign(inpSignUp)
})

frmLogin.addEventListener('submit' , function(e){
    e.preventDefault()
    vSign(inpLogin)
})

btnLogin.addEventListener('click' , moveSignup)
btnSignup.addEventListener('click' , moveLogin)

//Functions
function moveSignup(){
    signUpForm.style.marginLeft = '420px'
    setTimeout( function (){
        LoginForm.style.marginRight = '460px'
    },500)
}

function moveLogin(){
    LoginForm.style.marginRight = '0'
    setTimeout( function (){
        signUpForm.style.marginLeft = '0'
    },500)
}

function vSign(array){
    array.forEach(i => {
        if(i.value == ''){
            shake(i)
        }else{
        i.previousElementSibling.children[1].style.opacity = '0'
            i.style.border = '1px solid #ccccc8dd'
            if(i.type === 'email'){
                if(!i.value.includes('@')){
                    shake(i)
                    i.previousElementSibling.children[1].innerHTML = 'Please enter a valid email address'
                }
            }
            if(i.type === 'password'){
                let pass;
                pass = i.value
                if(pass.length <= 8){
                    shake(i)
                    i.previousElementSibling.children[1].innerHTML = 'Password should be more than 8 charachter'
                }
            }
        }
    });
}

function shake(i){
    i.style.border ='1px solid red'
    i.classList.add('animate__animated' , 'animate__shakeX')
    setTimeout( function (){
        i.classList.remove('animate__animated' , 'animate__shakeX')
    },450)
    i.previousElementSibling.children[1].style.opacity = '1'
}

function eye(i){
    if(i.previousElementSibling.type === 'text'){
        i.previousElementSibling.type = 'password'
        i.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        `
    }else{
        i.previousElementSibling.type = 'text'
        i.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
        `
    }
}