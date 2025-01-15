// ////////////////////////////////////////////////////////////获取对应的id文档流
var home = document.getElementById("home");
var navbtn1 = document.getElementById("navbtn1");
var newbtn = document.getElementById("btn-new");
//第二个页面的转跳变量
var newbtn2 = document.getElementById("newbtn");
let isclick = false;
newbtn2.addEventListener("click", function () {
    window.location.href = 'second.html';
});

newbtn.addEventListener("click", function () {
    window.location.href = 'second.html';
});
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
//////////////////////////////////////////全是新建问卷的样式代码
newbtn.addEventListener("mousedown", function () {
    newbtn.classList.add("active"); // 添加active类  
});

newbtn.addEventListener("mouseup", function () {
    newbtn.classList.remove("active"); // 移除active类  
});

newbtn.addEventListener("mouseleave", function () {
    newbtn.classList.remove("active"); // 鼠标移出时移除active类  
});
/////////////////////////////////////////////////////////////////////////////////////登录成功的样式
var PromptBox = document.querySelector('.PromptBox')//定位再最上面的盒子
let hasLoaded = false;
function tooltipBox() {
    if (!localStorage.getItem('var_tooltipBoxExecuted')) {
        var div = document.createElement('div')//创建一个div节点
        var img = document.createElement('img');
        img.src = "img/login.png";
        img.style.width = "50px"; // 设置图片宽度，可按需调整
        img.style.height = "50px"; // 设置图片高度，可按需调整
        img.style.marginRight = "5px"; // 设置图片与文字之间的间距，可按需调整
        div.appendChild(img); // 将图片元素添加到div中
        div.innerHTML += "登录成功！";//加内容信息
        div.classList.add('prompt')//加样式
        PromptBox.insertBefore(div, PromptBox.children[0])//放进最上面的盒子里
        //放进里面1毫秒后 发生改变才会过度
        setTimeout(() => {
            div.classList.add('shown')
        }, 5);
        //过3秒后删除 发生改变
        setTimeout(() => {
            div.classList.remove('shown')
        }, 1500)
        //过3.5秒后删除弹窗
        setTimeout(() => {
            div.remove()
        }, 2000)
        localStorage.setItem('var_tooltipBoxExecuted', 'true');
    }
}
window.onload = tooltipBox;
/////////////////////////////////////////////////////////////本地存储问题
//如果本地存储有东西则显示
const main = document.getElementById('main');
if (localStorage.length > 0) {
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (!key.startsWith('var')) {
                // 有的话将第一个页面隐藏
                var page = document.querySelector('#bodyarea');
                page.style.display = 'none';
                //显示我们要的第二个页面
                var page1 = document.querySelector('#localquest');
                page1.style.display = 'block';
                let htmlContent = '';  // 用于更新新建问卷产生的页面内容
                var Creattime = '', DDL = '', ReleaseDate = '', qstatus = '';
                for (var key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        if (!key.startsWith('var')) {
                            console.log(key);
                            var nowDate = new Date();

                            var catdata = localStorage.getItem(key);
                            var dataObject = JSON.parse(catdata);
                            var Title = dataObject.title || '';
                            var questionData = localStorage.getItem(key);
                            var data = JSON.parse(questionData);
                            // 获取CreationDate的值，如果为null或undefined则显示"无"
                            var Creattime = dataObject.Creattime || '';
                            // 获取Deadline的值，如果为null或undefined则显示"无"
                            var DDL = dataObject.DDL || '';
                            // 获取ReleaseDate的值，如果为null或undefined则显示"无"
                            var ReleaseDate = dataObject.ReleaseDate || '';
                            var qstatus = dataObject.qstatus;
                            var nowDateOnly = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

                            // 将DDL转换为Date对象
                            var DDLDate = new Date(DDL + "T00:00:00");
                            if (DDL) {
                                // 比较当前时间与截止日期
                                if (nowDateOnly > DDLDate) {
                                    // 如果当前时间晚于DDL，更新qstatus为'已结束'
                                    qstatus = '已结束';
                                    dataObject.qstatus = '已结束';
                                    // 存储更新后的状态
                                    localStorage.setItem(key, JSON.stringify(dataObject)); // 存储更新后的数据
                                    console.log('问卷已结束');
                                }
                            } else {
                                // 如果DDL为"无"或无效日期，不进行状态更新
                                console.log('截止日期无效，不更新问卷状态');
                            }
                            // 根据以上数据来添加html的内容
                            htmlContent += `
            <div class="wenjuan">
                <input type="checkbox" value="check">
                <div class="hdc1">${Title}</div>
                <div class="hdc2">${Creattime}</div>
                <div class="hdc3">${ReleaseDate}</div>
                <div class="hdc4">${DDL}</div>
                <div class="hdc5">${qstatus}</div>
                <div class="oper">
                    <button class="publish">发布问卷</button>
                    <button class="edit">编辑问卷</button>
                    <button class="delete">删除问卷</button>
                    <button class="view" data - title="${Title}">查看问卷</button>
                    <button class="fill">填写问卷</button>
                    <button class="analyzedata">分析数据</button>
                </div>
            </div>
            <div class="fgx"></div>
            `;
                        }
                    }
                }
                main.innerHTML = htmlContent;  // 将构建好的内容设置给元素，使用innerHTML可以解析HTML标签
                //发布问卷
                var viewButtons = document.querySelectorAll(".publish");
                viewButtons.forEach(function (button) {
                    button.addEventListener("click", function () {
                        var nowTitle = this.parentNode.parentNode.querySelector('.hdc1').textContent;
                        localStorage.setItem("Title", nowTitle);
                        // 跳转到目标页面
                        window.location.href = "release.html";
                    });
                });
                //查看问卷
                var view = document.querySelectorAll(".view");
                view.forEach(function (button) {
                    button.addEventListener("click", function () {
                        var nowTitle = this.parentNode.parentNode.querySelector('.hdc1').textContent;
                        localStorage.setItem("Title", nowTitle);
                        // 跳转到目标页面
                        window.location.href = "view.html";
                    });
                });
                //填写问卷
                var fill = document.querySelectorAll(".fill");
                fill.forEach(function (button) {
                    button.addEventListener("click", function () {
                        var nowTitle = this.parentNode.parentNode.querySelector('.hdc1').textContent;
                        localStorage.setItem("Title", nowTitle);
                        // 跳转到目标页面
                        window.location.href = "fill.html";
                    });
                });
                //编辑问卷
                var edit = document.querySelectorAll(".edit"); 
                edit.forEach(function (button) {
                    button.addEventListener("click", function () {
                        var nowTitle = this.parentNode.parentNode.querySelector('.hdc1').textContent;
                        localStorage.setItem("Title", nowTitle);
                        // 跳转到目标页面
                        window.location.href = "edit.html";
                    });
                });
                //分析数据
                var analyzedata = document.querySelectorAll(".analyzedata"); 
                analyzedata.forEach(function (button) {
                    button.addEventListener("click", function () {
                        // 跳转到目标页面
                        window.location.href = "dataanalysis.html";
                    });
                });
                //删除问卷
                var deletebtn = document.querySelectorAll(".delete");
                deletebtn.forEach(function (button) {
                    button.addEventListener("click", function () {
                        //获取标题
                        var questionnaireTitle = this.parentNode.parentNode.querySelector('.hdc1').textContent;
                        localStorage.removeItem(questionnaireTitle);
                        // 添加页面刷新功能
                        location.reload();
                    });
                });
            }
        }
    }
} else {
    console.log(1);
    var box = document.querySelector('#bodyarea');
    box.style.display = 'flex';
    var box1 = document.querySelector('#localquest');
    box1.style.display = 'none';
}
////////////////////////////////调节发布状态按钮的可使用情况
// 获取所有问卷的父元素
var questionnaires = document.querySelectorAll('.wenjuan');
// 遍历每个问卷
questionnaires.forEach(function (questionnaire) {
    var releaseStatus = questionnaire.querySelector('.hdc5').textContent;
    console.log(releaseStatus);
    var fill = questionnaire.querySelector('.fill');
    var analy = questionnaire.querySelector('.analyzedata');
    var edit = questionnaire.querySelector('.edit');
    var publish = questionnaire.querySelector('.publish');
    if (releaseStatus === '未发布') {
        fill.disabled = true;
        analy.disabled = true;
    } else if (releaseStatus === '已结束') {
        fill.disabled = true;
        edit.disabled = true;
        publish.disabled = true;
    }
    else {
        fill.disabled = false;
        analy.disabled = false;
    }
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
