let username=document.getElementById("username");
let password=document.getElementById("password");
let login=document.getElementById("login");



login.onclick=function(e){
    e.preventDefault();
    if(username.value==""||password.value==""){
        alert("账号或密码不能为空");
        return;
    } 
    else if(username.value=="admin"&&password.value=="123456"){
        alert("登录成功");
        window.location.href="问卷主体/index.html";
    }else{
        alert("登录失败,账号或密码错误");
        return;
    }
}
