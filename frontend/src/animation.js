import { gsap } from "gsap";

class Animation {
  constructor(target) {
    this.target = target
  }

  comeIn(tween) {
    tween = tween || gsap.timeline()
    tween.to(this.target, { duration: 0, display: "none", opacity: 0, x: 0, y: 40 })
    tween.to(this.target, { duration: 0.5, display: "flex", opacity: 1, x: 0, y: 0 })
  }

  comeOut(tween) {
    tween = tween || gsap.timeline()
    tween.to(this.target, { duration: 0, display: "flex", opacity: 1, x: 0, y: 0 })
    tween.to(this.target, { duration: 0.5, display: "none", opacity: 0, x: 0, y: -40 })
  }
}

function AtoB(a, b, delay) {
  const tween = gsap.timeline({ delay: delay })
  a.comeOut(tween)
  b.comeIn(tween)
}

const animation = {
  login: new Animation('.login'),
  register: new Animation('.register'),
  loading: new Animation('.loading')
}


function RegisterToLogin() {
  AtoB(animation.register, animation.login, 0.1)
}

function LoginToRegister() {
  AtoB(animation.login, animation.register, 0.1)
}

function LoadingToLogin() {
  AtoB(animation.loading, animation.login, 0.1)
}

export {
  RegisterToLogin,
  LoginToRegister,
  LoadingToLogin
}