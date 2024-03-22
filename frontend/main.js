import './style.scss'
import * as animation from './src/animation'

// ===== Window Loading... =====
// TODO:页面加载完成后，执行动画
window.onload = function () {
  animation.LoadingToLogin()
}

// ===== To Register and Login Btn Function=====
// TODO:找到注册按钮和登录按钮
const toRegisterBtn = document.querySelector('.to-register-btn')
const toLoginBtn = document.querySelector('.to-login-btn')

var a =1
console.log(a);
let b =1
console.log(b);
// TODO:给注册按钮和登录按钮添加点击事件
toRegisterBtn.addEventListener('click', showRegister)
toLoginBtn.addEventListener('click', showLogin)

// TODO:注册按钮和登录按钮的点击事件
function showRegister(event) {
  event.preventDefault()
  animation.LoginToRegister()
}

function showLogin(event) {
  event.preventDefault()
  animation.RegisterToLogin()
}