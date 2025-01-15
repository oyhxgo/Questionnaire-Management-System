

// 注册页面需要
let register = document.getElementById("register");
let rusername = document.getElementById("rusername");
let remail = document.getElementById("remail");
let rpassword = document.getElementById("rpassword");
let rpassword2 = document.getElementById("rpassword2");
let tk = document.getElementById("tk");
register.onclick = function (e) {
  e.preventDefault();
  if (rusername.value == "" || rpassword.value == "" || rpassword2.value == "" || remail.value == "") {
    alert("注册失败,请填写完整信息");
    return;
  }
  else if (rpassword.value != rpassword2.value) {
    alert("注册失败,两次密码不一致");
    return;
  }
  // 没有勾选条款则不让进入
  else if (!tk.checked){
    alert("请先勾选用户条款");
    return;
  }
  else {
    alert("注册成功,现在前往登录界面");
    window.location.href = "../请点击这里进入.html";
  }
}
