console.log('index.js is connected...');


// Display Signin Modal
let signinButton = document.querySelector('#signin-button');
    signinButton.addEventListener('click', () => {
        let signinForm = document.querySelector('.signin-form');
        signinForm.style.display = "block";

        // Close modal by clicking outside of it
    window.onclick = (event) => {   
        const cancelSigninButton = document.querySelector('.signinform-cancelButton');
        if(event.target == cancelSigninButton) {
        signinForm.style.display = "none";
        }
    }
})
        
// Select login form
let loginForm = document.querySelector('.login-form');
console.log(loginForm);

// Display Login Modal
let loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', () => {               loginForm.style.display = "block";
    
// Close modal by clicking outside of it
    window.onclick = (event) => {   
        const cancelLoginButton = document.querySelector('.loginform-cancelButton');
        if(event.target == cancelLoginButton) {
        loginForm.style.display = "none";
        }
    }
})



