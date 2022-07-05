let login = document.getElementById('login');
let signup = document.getElementById('signup');
let signup_btn = document.querySelector('.signup_btn');
let login_btn = document.querySelector('.login_btn');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

let left_right = () =>{
    login.style.right = '3rem';
    signup.style.left = '-36rem';
    img1.style.opacity = '0';
    img1.style.transform = 'translate(0rem, -45rem)';
    img2.style.opacity = '1';
    img2.style.transform = "translate(-32rem, -40rem)";
}

let right_left = () =>{
    login.style.right = '-35rem';
    signup.style.left = '0rem';
    img1.style.opacity = '1';
    img1.style.transform = 'translate(0, 0)';
    img2.style.opacity = '0';
    img2.style.transform = 'translate(-32rem, 5rem)';
}