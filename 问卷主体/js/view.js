var home = document.getElementById("home");
var navbtn1 = document.getElementById("navbtn1");
//第二个页面的转跳变量
let isclick=false;
// 点击首页问卷按钮时，重置页面
home.addEventListener("click", function () {
    window.location.href = "index.html";
})
/////////////////////////////////////////////////////////////////////////////////////////////////这里全是在设置按钮的颜色
window.onload = function () {
    if (isclick) {
        // 颜色改为rgb(21, 175, 237)
        navbtn1.style.color = "rgb(21, 175, 237)";
    }
} 
navbtn1.addEventListener("click", function () {
    // 在重新加载前保存按钮颜色状态
    isclick=true;
    window.location.href = "index.html";
  
});

window.onload = function () { 
  var Title = localStorage.getItem("Title");
  const questiontitle= document.getElementById('Title') // 获取标题元素
  if (Title) {
    //防止数据冗余以及数据错乱
    localStorage.removeItem("Title");
    key = Title;
      // 尝试获取问卷数据
      var catdate = localStorage.getItem(key);
      if (catdate) {
          var date = JSON.parse(catdate); 
          questiontitle.innerHTML = date.title;
          var dataOption = date.questions;
          let htmlContent = '';
          dataOption.forEach((question, index) => {
              htmlContent += `<div class ="question">${index + 1}. ${question.text}</div>`; 
              const firstOptionChar = 'A'.charCodeAt(0);
              if (question.type === '单选题' || question.type === '多选题') {
                  question.answers.forEach((option, optionIndex) => {
                      const optionChar = String.fromCharCode(firstOptionChar + optionIndex);
                      if (question.type === '单选题') {
                          htmlContent += `<div class="answer"><input type="radio">${optionChar}. ${option.text}</div>`; 
                      } else if (question.type === '多选题') {
                          htmlContent += `<div class="answer"><input type="checkbox">${optionChar}. ${option.text}</div>`;
                      }
                  });
              } else if (question.type === '填空题') {
                  htmlContent += `<div class="answer"><input type="text"></div>`;
              }
              htmlContent += `<br>`;
          });
          localStorageContent.innerHTML = htmlContent;
      } else {
          // 如果没有找到对应问卷数据，进行处理，例如显示提示信息
          console.log("没有找到对应问卷数据");
      }
  } else {
      // 如果没有问卷标题，进行处理，例如跳转到其他页面
      console.log("没有问卷标题");
  }
  //点击返回返回index页面
  document.getElementById('return').addEventListener('click', function () {
      window.location.href="index.html";
  })
};
/////////////////////////////////////////////////////////////头像框的css
function toggleDropdown() {
    var dropdownContent = document.getElementById('ppContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

function logout() {
    // 清除登录状态相关的本地存储提示
    // 清除localStorage中的所有数据
    localStorage.clear();
    // 清除sessionStorage中的所有数据
    sessionStorage.clear();
    // 清除cookies中的所有信息（以下是一种简单的模拟清除方式，实际情况更复杂，需根据具体的库或方法来操作）
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    alert('你已成功退出登录');
  window.location.href = "../请点击这里进入.html";
}

function resetPage() {
    localStorage.clear();
    // 清除sessionStorage中的所有数据
    sessionStorage.clear();
    // 清除cookies中的所有信息（以下是一种简单的模拟清除方式，实际情况更复杂，需根据具体的库或方法来操作）
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    // 清除并重新加载页面
    location.reload();
}

