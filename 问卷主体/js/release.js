////////////////////////////////////////////////////////导航栏附近的设置
var home = document.getElementById("home");
var navbtn1 = document.getElementById("navbtn1");
//第二个页面的转跳变量
let isclick = false;
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
    isclick = true;
    window.location.href = "index.html";

});
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

////////////////////////////////////////////////////////////////////正文js
window.onload = function () {
    var Title = localStorage.getItem("Title");
    const questiontitle = document.getElementById('Title') // 获取标题元素
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
            alert("没有找到对应问卷数据");
            console.log("没有找到对应问卷数据");
            window.location.href = "index.html";
        }
    } else {
        // 如果没有问卷标题，进行处理，例如跳转到其他页面
        alert("没有问卷标题");
        console.log("没有问卷标题");
        window.location.href = "index.html";
    }
    var dateInput = document.getElementById("dateinput"); // 截止日期输入框  
    var modal = document.getElementById("myModal");
    const span = document.getElementById("closeModal"); // 关闭模态框的按钮  
    // 点击关闭按钮时关闭模态框  
    span.onclick = function () {
        modal.style.display = "none"; // 隐藏模态框  
    }

    // 点击模态框外部时关闭模态框  
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // 隐藏模态框  
        }
    }
    //点击发布问卷后更新发布状态及其修改数据
    function savedata() {
        //////////////////时间判断
        var today = new Date(); // 获取今天的日期  
        var selectedDate = new Date(dateInput.value); // 获取截止日期  
        var questionData = localStorage.getItem(key);
        if (questionData) {
            var data = JSON.parse(questionData);
            if (data.qstatus === '发布中') {
                // 如果问卷已经发布，提示用户并询问是否确定要修改
                if (confirm('该问卷已经发布，您确定要修改？')) {
                    // 用户确定修改，更新状态为'发布中'
                    data.qstatus = '发布中';
                    data.DDL=dateInput.value;
                    localStorage.setItem(key, JSON.stringify(data)); // 存储更新后的数据
                    return true;
                } else {
                    // 用户取消修改
                    return false;
                }
            } else {
                // 如果问卷未发布，直接更新状态为'发布中'
                data.qstatus = '发布中';
                localStorage.setItem(key, JSON.stringify(data)); // 存储更新后的数据
                return true;
            }
        } 

        // 检查截止日期是否已输入  
        if (!dateInput.value) {
            alert('请输入截止日期'); // 提示框：没有截止日期  
            return false; // 终止后续执行  
        }

        // 比较选定的截止日期与今天的日期  
        today.setHours(0, 0, 0, 0); // 重置今天的时间  
        selectedDate.setHours(0, 0, 0, 0); // 重置所选日期的时间  
        if (selectedDate < today) {
            modal.style.display = "block"; // 显示模态框以警告无效日期  
            console.log("所选日期早于今天，请选择一个有效的日期。");
            return false; // 终止后续执行  
        } else {
            console.log("所选日期有效。");
            return true;
        }
       


    }
    //点击返回返回index页面
    document.getElementById('release').addEventListener('click', function () {
        if (savedata()) {
            alert('恭喜，问卷发布成功！！！');
            outbtn2.style.display = 'block';
            if (confirm('是否要返回首页？')) {
                window.location.href = 'index.html';
            }


        } else {
            console.log("发布失败，请检查输入的日期是否正确。");
        }
    })
};

var outbtn2 = document.getElementById('outbtn2');
outbtn2.addEventListener('click', function () {
    window.location.href = 'index.html';
});