
// 性别分布
var genderChart = echarts.init(document.getElementById('genderChart'));
var genderOption = {
    tooltip: {},
    legend: {
        data: ['男', '女'],
        left: 'right'
    },
    xAxis: {
        data: ["男", "女"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [2.5, 0.5],
        itemStyle: {
            color: function (params) {
                // 颜色可以根据数据不同而不同
                var colorList = ['#50fa7b', '#bd93f9'];
                return colorList[params.dataIndex];
            }
        }
    }]
};
genderChart.setOption(genderOption);

// 游戏频率
var gameFrequencyChart = echarts.init(document.getElementById('gameFrequencyChart'));
var gameFrequencyOption = {
    tooltip: {},
    legend: {
        data: ['几乎每天都玩', '一个星期玩一两次', '一年也玩不到几次', '从来不玩'],
        left: 'right'
    },
    xAxis: {
        data: ["几乎每天都玩", "一个星期玩一两次", "一年也玩不到几次", "从来不玩"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [2, 3, 2, 1],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#ff79c6' },
                    { offset: 1, color: '#8be9fd' }
                ]
            )
        }
    }]
};
gameFrequencyChart.setOption(gameFrequencyOption);

// 上瘾原因
var addictionReasonsChart = echarts.init(document.getElementById('addictionReasonsChart'));
var addictionReasonsOption = {
    tooltip: {},
    legend: {
        data: ['网游本身太好玩了', '校园生活过于枯燥', '逃避现实的问题', '大学生自身目标的缺失', '老师和同学们疏于关心'],
        left: 'right'
    },
    xAxis: {
        data: ["网游本身太好玩了", "校园生活过于枯燥", "逃避现实的问题", "大学生自身目标的缺失", "老师和同学们疏于关心"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [3, 2, 2, 1, 0],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#ffb86c' },
                    { offset: 1, color: '#f1fa8c' }
                ]
            )
        }
    }]
};
addictionReasonsChart.setOption(addictionReasonsOption);
// ////////////////////////////////////////////////////////////获取对应的id文档流
var home = document.getElementById("home");
var navbtn1 = document.getElementById("navbtn1");
// 点击首页问卷按钮时，重置页面
home.addEventListener("click", function () {
    window.location.href = "index.html";
})
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