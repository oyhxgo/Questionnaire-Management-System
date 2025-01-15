// ////////////////////////////////////////////////////////////获取对应的id文档流
var home = document.getElementById("home");
var navbtn1 = document.getElementById("navbtn1");
navbtn1.addEventListener("click", function () {
  window.location.href = "index.html";

});
home.addEventListener("click", function () {
  window.location.href = "index.html";
})
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


////////////////////////////////////////////////////编辑
// 获取各种 DOM 元素的引用  
// 获取对应的id文档流
var mytest1 = document.getElementById("navbtn1");  // "我的问卷" 按钮  
var newbtn = document.getElementById("btn-new"); // 新建问卷按钮  
var title = document.getElementById("test-title"); // 问卷标题区域  
var inputField = title.querySelector("input"); // 标题输入框  
var testvisible = document.getElementById("test"); // 问卷容器  
var addquestion = document.getElementById("add"); // 添加问题按钮  
var dateInput = document.getElementById("dateinput"); // 截止日期输入框  
var submitButton = document.getElementById("submit-btn"); // 提交问卷按钮  
var out = document.getElementById("outbtn"); // 另一个操作按钮  
var myDialog = document.getElementById("myDialog"); // 对话框元素（未在代码中使用）  
const modal = document.getElementById("myModal"); // 显示消息的模态框  
const btn = document.getElementById("submit-btn"); // 提交按钮的重复引用  
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

// 提交按钮点击事件处理程序  
btn.addEventListener("click", function () {
  // 获取输入框中的值  
  var titleInput = document.querySelector("#test-title input").value; // 标题输入的值  
  var questions = document.querySelectorAll(".question-container"); // 获取所有问题容器  
  var selectedDate = new Date(dateInput.value); // 获取截止日期  
  var today = new Date(); // 获取今天的日期  

  // 检查标题是否为空  
  if (!titleInput) {
    alert('请先输入新的标题'); // 提示框：标题为空  
    return; // 终止后续执行  
  }

  // 检查是否添加了问题  
  if (questions.length === 0) {
    alert('请先新建题目'); // 提示框：没有问题  
    return; // 终止后续执行  
  }

  // 验证每个问题的输入框  
  for (let question of questions) {
    let quesInput = question.querySelector("input[type='text']"); // 假设问题是文本输入框  
    if (!quesInput || !quesInput.value) {
      alert('请先完善题目内容!'); // 提示框：问题内容不完整  
      return; // 终止后续执行  
    }
  }

  // 检查截止日期是否已输入  
  if (!dateInput.value) {
    alert('请输入截止日期'); // 提示框：没有截止日期  
    return; // 终止后续执行  
  }

  // 比较选定的截止日期与今天的日期  
  today.setHours(0, 0, 0, 0); // 重置今天的时间  
  selectedDate.setHours(0, 0, 0, 0); // 重置所选日期的时间  
  if (selectedDate < today) {
    modal.style.display = "block"; // 显示模态框以警告无效日期  
    console.log("所选日期早于今天，请选择一个有效的日期。");
    return; // 终止后续执行  
  } else {
    console.log("所选日期有效。");
  }

  // 如果所有检查通过，继续处理发布问卷的逻辑  
  console.log("问卷已发布，标题:", titleInput, "截止日期:", selectedDate);
});

// 发布问卷逻辑有待改善  
out.addEventListener("click", function () {
  var titleInput = document.querySelector("#test-title input").value; // 标题输入的值  
  var questions = document.querySelectorAll(".question-container"); // 获取所有问题容器  
  var selectedDate = new Date(dateInput.value); // 获取截止日期  
  var today = new Date(); // 获取今天的日期  

  // 检查标题是否为空  
  if (!titleInput) {
    alert('请先输入新的标题'); // 提示框：标题为空  
    return; // 终止后续执行  
  }
  // 检查是否添加了问题  
  if (questions.length === 0) {
    alert('请先新建题目'); // 提示框：没有问题  
    return; // 终止后续执行  
  }
  // 验证每个问题的输入框  
  for (let question of questions) {
    let quesInput = question.querySelector("input[type='text']"); // 假设问题是文本输入框  
    if (!quesInput || !quesInput.value) {
      alert('请先完善题目内容!'); // 提示框：问题内容不完整  
      return; // 终止后续执行  
    }
  }
  // 检查截止日期是否已输入  
  if (!dateInput.value) {
    alert('请输入截止日期'); // 提示框：没有截止日期  
    return; // 终止后续执行  
  }
  today.setHours(0, 0, 0, 0); // 重置今天的时间  
  selectedDate.setHours(0, 0, 0, 0); // 重置所选日期的时间  
  if (selectedDate < today) {
    modal.style.display = "block"; // 显示模态框以警告无效日期  
    console.log("所选日期早于今天，请选择一个有效的日期。");
    return; // 终止后续执行  
  } else {
    console.log("所选日期有效。");
  }
  // 如果所有检查通过，继续处理发布问卷的逻辑  
  console.log("问卷已发布，标题:", titleInput, "截止日期:", selectedDate);
});

////////////////////////////////////////////////////////////用户输入
// 显示标题输入区并聚焦  
title.style.display = "flex"; // 显示标题区域  
inputField.focus(); // 聚焦光标到标题输入框  
inputField.value = ""; // 清空输入框
if (inputField.value) {
  isModified = true;
}
//新建问卷的内容
testvisible.style.display = 'flex'; // 显示问卷容器  
testvisible.style.flexDirection = 'column'; // 设置问卷容器显示方向为垂直  


// 点击我的问卷按钮时跳转到另一个页面  
mytest1.addEventListener("click", function () {
  window.location.href = 'index.html'; // 跳转到 "first.html" 页面  
  console.log("按钮被点击");
});

// 获取隐藏和新建问题按钮的元素  
var hide = document.getElementById("hide"); // 隐藏按钮  
var addvisible = document.getElementById("show-btn"); // 显示新建问题按钮  

//////////////////////////////////////////添加问题
// 点击添加问题按钮显示相关元素  
addquestion.addEventListener("click", function () {
  isModified = true;
  addvisible.style.display = "flex"; // 显示添加问题区域  
  // myDialog.showModal(); // 显示对话框 (已注释掉)  
});

// 点击收起隐藏相关元素  
hide.addEventListener("click", function () {
  addvisible.style.display = "none"; // 隐藏添加问题区域  
});

var test = document.getElementById("test");
var order = 0;
let questionCount = 0;  // 记录当前添加的问题数量  

// 为按钮添加点击事件监听器，调用相应的函数以添加不同类型的问题  
document.getElementById("single").addEventListener('click', () => addSingleChoiceQuestion('单选题'));
document.getElementById("many").addEventListener('click', () => addMultiChoiceQuestion('多选题'));
document.getElementById("blank").addEventListener('click', () => addFillInBlankQuestion('填空题'));

// 添加单选题  
function addSingleChoiceQuestion(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;
  const questionContainer = createQuestionContainer(type, questionCount, "单选题");  // 创建题目容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 添加多选题  
function addMultiChoiceQuestion(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;

  const questionContainer = createQuestionContainer(type, questionCount, "多选题");  // 创建题目容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 添加填空题  
function addFillInBlankQuestion(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;

  const questionContainer = createFillInBlankQuestionContainer(type, questionCount);  // 创建填空题容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 创建题目容器（单选和多选题的容器）  
function createQuestionContainer(type, index, questionType) {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add('question-container');  // 为题目容器添加类名  
  questionContainer.dataset.type = questionType;  // 设置数据属性以存储题目类型  

  const questionLabel = document.createElement('span');
  questionLabel.innerText = `${type} ${index}: `;  // 设置题目标记，显示题目类型和编号  
  questionLabel.style.fontWeight = 'bold';
  questionLabel.style.marginLeft = '8px';
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = `请输入${type}问题...`;  // 提示用户输入问题  
  questionInput.style.width = '80%';  // 设置输入框宽度  
  questionInput.style.height = '30px';  // 设置输入框宽度  
  questionInput.style.margin = '10px 0';  // 设置输入框宽度  
  const optionsContainer = document.createElement('div');  
  optionsContainer.classList.add('option-container');  // 创建一个容器用于存放题目选项  
  // 根据题目类型填充初始选项  
  for (let i = 0; i < 4; i++) {
    if (questionType === "单选题") {
      addSingleChoiceOption(optionsContainer, index, i);  // 添加单选选项  
    } else {
      addMultiChoiceOption(optionsContainer, index, i);  // 添加多选选项  
    }
  }

  const addOptionButton = document.createElement('button');
  addOptionButton.innerText = '添加选项';  // 添加选项按钮  
  addOptionButton.classList.add('addOptionButton-1');
  const removeQuestionButton = document.createElement('button');
  removeQuestionButton.innerText = '删除问题';  // 删除问题按钮  
  removeQuestionButton.classList.add('remove-button-1');

  // 点击添加选项按钮的事件处理  
  addOptionButton.addEventListener('click', function () {
    if (optionsContainer.children.length < 6) {  // 限制最多添加六个选项  
      if (questionType === "单选题") {
        addSingleChoiceOption(optionsContainer, index, optionsContainer.children.length);
      } else {
        addMultiChoiceOption(optionsContainer, index, optionsContainer.children.length);
      }
    } else {
      alert('最多只能添加六个选项！');  // 超出选项限制时给出提示  
    }
  });

  // 点击删除问题按钮的事件处理  
  removeQuestionButton.addEventListener('click', function () {
    questionContainer.remove();  // 从页面中删除问题容器  
    questionCount--;  // 减少问题计数  
    updateQuestionNumbers();  // 更新问题编号
  });

  // 将创建的元素添加到题目容器中  
  questionContainer.appendChild(questionLabel);
  questionContainer.appendChild(questionInput);
  questionContainer.appendChild(optionsContainer);
  questionContainer.appendChild(addOptionButton);
  questionContainer.appendChild(removeQuestionButton);
  questionContainer.appendChild(createMoveButtons(questionContainer));  // 添加上下移动按钮  

  const underline = document.createElement('hr');  // 分隔线  
  questionContainer.appendChild(underline);

  return questionContainer;  // 返回构建好的题目容器  
}

// 创建填空题容器  
function createFillInBlankQuestionContainer(type, index) {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add('question-container');  // 为填空题容器添加类名  
  questionContainer.dataset.type = '填空题';  // 设置数据属性以存储题目类型  

  const questionLabel = document.createElement('span');
  questionLabel.style.fontWeight = 'bold';
  questionLabel.style.marginLeft = '8px';
  questionLabel.innerText = `${type} ${index}: `;  // 设置题目标记，显示题目类型和编号  

  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = `请输入${type}问题...`;  // 提示用户输入问题  
  questionInput.style.width = '80%';  // 设置输入框宽度  
  questionInput.style.height = '35px'  // 设置输入框宽度  
  questionInput.style.margin = '10px 0';  // 设置输入框宽度  
  const blankInput = document.createElement('input');
  blankInput.type = 'text';
  blankInput.placeholder = '填空...';  // 用于填空的输入框  
  blankInput.style.width = '70%';

  const removeQuestionButton = document.createElement('button');
  removeQuestionButton.innerText = '删除问题';  // 删除问题按钮  
  removeQuestionButton.classList.add('remove-button-1');

  // 点击删除问题按钮的事件处理  
  removeQuestionButton.addEventListener('click', function () {
    questionContainer.remove();  // 从页面中删除问题容器  
    questionCount--;  // 减少问题计数  
    updateQuestionNumbers();  // 更新问题编号  
  });

  // 将创建的元素添加到题目容器中  
  questionContainer.appendChild(questionLabel);
  questionContainer.appendChild(questionInput);
  // questionContainer.appendChild(blankInput);  
  questionContainer.appendChild(removeQuestionButton);
  questionContainer.appendChild(createMoveButtons(questionContainer));  // 添加上下移动按钮  

  const underline = document.createElement('hr');  // 分隔线  
  questionContainer.appendChild(underline);

  return questionContainer;  // 返回构建好的填空题容器  
}

// 创建单选题的选项  
function addSingleChoiceOption(container, questionId, optionIndex) {
  const optionContainer = document.createElement('div');  // 创建选项容器 
  optionContainer.classList.add('singleoption');
  const optionInput = document.createElement('input');
  optionInput.type = 'radio';  // 单选使用 radio 类型  
  optionInput.name = 'question' + questionId;  // 设置同组选项的名称  

  const optionLabel = document.createElement('span');
  optionLabel.innerText = getOptionLabel(optionIndex);  // 获取选项标签（如 A, B, C...）  

  const optionText = document.createElement('input');
  optionText.type = 'text';
  optionText.placeholder = '选项内容...';  // 提示用户输入选项内容  
  optionText.style.marginLeft = '5px';
  optionText.style.width = '50%';
  optionText.style.height = '10%';
  const removeOptionButton = document.createElement('button');
  removeOptionButton.innerText = 'X';  // 删除选项按钮  
  removeOptionButton.style.textAlign = 'center';
  removeOptionButton.classList.add('remove-button');

  // 点击删除选项按钮的事件处理  
  removeOptionButton.addEventListener('click', function () {
    optionContainer.remove();  // 从选项容器中移除该选项  
    updateSingleChoiceOptionNumbers(container);  // 更新选项编号  
  });

  // 将创建的元素添加到选项容器  
  optionContainer.appendChild(optionInput);
  optionContainer.appendChild(optionLabel);
  optionContainer.appendChild(optionText);
  optionContainer.appendChild(removeOptionButton);

  container.appendChild(optionContainer);  // 将选项容器添加到主容器中  
}

// 创建多选题的选项  
function addMultiChoiceOption(container, questionId, optionIndex) {
  const optionContainer = document.createElement('div');  // 创建选项容器  
  const optionInput = document.createElement('input');
  optionContainer.classList.add('manyoption');
  optionInput.type = 'checkbox';  // 多选使用 checkbox 类型  
  optionInput.name = 'question' + questionId + '-' + optionIndex;  // 为每个选项设置不同的名称  

  const optionLabel = document.createElement('span');
  optionLabel.innerText = getOptionLabel(optionIndex);  // 获取选项标签  

  const optionText = document.createElement('input');
  optionText.type = 'text';
  optionText.placeholder = '选项内容...';  // 提示用户输入选项内容  
  optionText.style.width = '50%';
  optionText.style.height = '10%';
  optionText.style.marginLeft = '5px';
  const removeOptionButton = document.createElement('button');
  removeOptionButton.innerText = 'X';  // 删除选项按钮 
  removeOptionButton.style.textAlign = 'center';
  removeOptionButton.classList.add('remove-button');

  // 点击删除选项按钮的事件处理  
  removeOptionButton.addEventListener('click', function () {
    optionContainer.remove();  // 从选项容器中移除该选项  
    updateMultiChoiceOptionNumbers(container);  // 更新选项编号  
  });

  // 将创建的元素添加到选项容器  
  optionContainer.appendChild(optionInput);
  optionContainer.appendChild(optionLabel);
  optionContainer.appendChild(optionText);
  optionContainer.appendChild(removeOptionButton);

  container.appendChild(optionContainer);  // 将选项容器添加到主容器中  
}

// 获取选项标签的函数（如 A, B, C...）  
function getOptionLabel(index) {
  return String.fromCharCode(65 + index); // ASCII 编码从 A 开始  
}

// 更新单选题选项序号的函数  
function updateSingleChoiceOptionNumbers(container) {
  const options = container.querySelectorAll('div');  // 获取所有选项  
  options.forEach((option, index) => {
    const label = option.querySelector('span');  // 获取选项标签  

    if (label) {
      label.innerText = getOptionLabel(index);  // 更新选项标签  
    }
  });
}

// 更新多选题选项序号的函数  
function updateMultiChoiceOptionNumbers(container) {
  const options = container.querySelectorAll('div');  // 获取所有选项  
  options.forEach((option, index) => {
    const label = option.querySelector('span');  // 获取选项标签  
    label.style.margin = '0 5px';
    if (label) {
      label.innerText = getOptionLabel(index);  // 更新选项标签  
    }
  });
}

// 更新题目序号的函数  
function updateQuestionNumbers() {
  const questions = document.querySelectorAll('.question-container');  // 获取所有问题容器  
  questions.forEach((question, index) => {
    const label = question.querySelector('span');  // 获取题目标记  
    const type = question.dataset.type;  // 获取题目类型  
    if (label) {
      label.innerText = `${type} ${index + 1}: `;  // 更新题目标记  
    }
    // 更新选项的编号  
    const optionsContainer = question.querySelector('.option-container');
    if (optionsContainer) {
      if (type === '单选题') {
        updateSingleChoiceOptionNumbers(optionsContainer);  // 更新单选题的选项编号  
      } else if (type === '多选题') {
        updateMultiChoiceOptionNumbers(optionsContainer);  // 更新多选题的选项编号  
      }
    }
  });
}

// 创建上下移动按钮  
function createMoveButtons(questionContainer) {
  const upButton = document.createElement('button');
  upButton.innerText = '上移';  // 上移按钮  
  const downButton = document.createElement('button');
  downButton.innerText = '下移';  // 下移按钮  

  upButton.classList.add('move-buttons');
  downButton.classList.add('move-buttons');

  // 点击上移按钮的事件处理  
  upButton.addEventListener('click', function () {
    const prevContainer = questionContainer.previousElementSibling;
    if (prevContainer) {
      questionContainer.parentElement.insertBefore(questionContainer, prevContainer);  // 将当前问题移至上方  
      updateQuestionNumbers(); // 更新问题序号  
    }
  });

  // 点击下移按钮的事件处理  
  downButton.addEventListener('click', function () {
    const nextContainer = questionContainer.nextElementSibling;
    if (nextContainer) {
      questionContainer.parentElement.insertBefore(nextContainer, questionContainer);  // 将当前问题移至下方  
      updateQuestionNumbers(); // 更新问题序号  
    }
  });

  const moveButtonsContainer = document.createElement('div');
  moveButtonsContainer.appendChild(upButton);
  moveButtonsContainer.appendChild(downButton);

  return moveButtonsContainer;  // 返回包含移动按钮的容器  
}
/////////////////////////////////////////////////////////////////////////////////////////////////+
//接下来是本地存储数据的js
//问卷的监听器
//////////////////////////////////////////////////////////////////////////////////
// 问卷的监听器
var outbtn2 = document.getElementById('outbtn2');
outbtn2.addEventListener('click', function () {
  window.location.href = 'index.html';
});

submitButton.addEventListener('click', function () {
  //用户输入的文卷标题
  var titleInput = document.getElementById("testtitle").value;
  //用户输入的问卷日期
  const DDL1 = new Date(dateInput.value);
  const year1 = DDL1.getFullYear();
  const month1 = String(DDL1.getMonth() + 1).padStart(2, '0');
  const day1 = String(DDL1.getDate()).padStart(2, '0');
  const selectedDate = `${year1}-${month1}-${day1}`;
  //选择所有的问题
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const createtime = `${year}-${month}-${day}`;
  //选择所有的问题
  var questions = document.querySelectorAll('.question-container');
  //存储整个问卷的数据
  var questionnaireData = {
    title: titleInput,
    qstatus: '未发布',
    ReleaseDate: null,
    Creattime: createtime,
    DDL: selectedDate,
    selectedDate: [],
    questions: [],
  };

  if (!titleInput || !dateInput.value || questions.length === 0) {
    return;
  }

  questions.forEach(function (question) {
    // 通过前三个文字提取问题类型和文本
    const questionLabel = question.querySelector('span');
    const labelText = questionLabel.innerText;
    const questionType = labelText.split(' ')[0].toLowerCase();
    const questionText = question.querySelector('input[type="text"]').value;
    const questionData = {
      type: questionType,
      text: questionText,
      answers: []
    };

    if (questionType === '单选题' || questionType === '多选题') {
      const options = question.querySelectorAll('input[type="radio"], input[type="checkbox"]');
      options.forEach(function (option) {
        const answerText = option.nextElementSibling.nextElementSibling.value
        questionData.answers.push({ text: answerText });
      });
    } else if (questionType === '填空题') {
      const answerText = question.querySelector('input[type="text"]').value
      questionData.answers.push({ text: answerText });
    }
    questionnaireData.questions.push(questionData);
  });

  // 保存问卷数据到本地存储
  localStorage.setItem(titleInput, JSON.stringify(questionnaireData));
  alert('提交成功');
  outbtn2.style.display = 'block';
});


window.onload = function () {
  var Title = localStorage.getItem("Title");
  const inputElement = document.querySelector("#test-title input");
  inputElement.value = Title;
  const questiontitle = document.getElementById('Title') // 获取标题元素
  if (Title) {
    //防止数据冗余以及数据错乱
    localStorage.removeItem("Title");
    key = Title;
    // 尝试获取问卷数据
    var catdate = localStorage.getItem(key);
    // 如果成功获取到问卷数据，则显示问卷标题
    if (catdate) {
      // 将问卷数据转换为对象
      var date = JSON.parse(catdate);
      var dataOption = date.questions;
      //根据问卷类型创建文本框
      dataOption.forEach((question, index) => {
        if (question.type === '单选题' || question.type === '多选题') {
         
            if (question.type === '单选题') {
              (function () {
                addSingleChoiceQuestion1('单选题');
              })();
            } else if (question.type === '多选题') {
              (function () {
                addMultiChoiceQuestion1('多选题');
              })();
            }
        } else if (question.type === '填空题') {
          (function () {
            addFillInBlankQuestion1('填空题')
          })();
        }
      });
    }
  }
}


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




/////////////////////////////////////////////////////编辑111111111111111111111111
// 添加单选题  
function addSingleChoiceQuestion1(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;
  const questionContainer = createQuestionContainer1(type, questionCount, "单选题");  // 创建题目容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 添加多选题  
function addMultiChoiceQuestion1(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;

  const questionContainer = createQuestionContainer1(type, questionCount, "多选题");  // 创建题目容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 添加填空题  
function addFillInBlankQuestion1(type) {
  questionCount++;  // 增加问题计数  
  isModified = true;

  const questionContainer = createFillInBlankQuestionContainer1(type, questionCount);  // 创建填空题容器  
  document.getElementById('question-list').appendChild(questionContainer);  // 将题目容器添加到问题列表中  
}

// 创建题目容器（单选和多选题的容器）  
function createQuestionContainer1(type, index, questionType) {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add('question-container');  // 为题目容器添加类名  
  questionContainer.dataset.type = questionType;  // 设置数据属性以存储题目类型  

  const questionLabel = document.createElement('span');
  questionLabel.innerText = `${type} ${index}: `;  // 设置题目标记，显示题目类型和编号  
  questionLabel.style.fontWeight = 'bold';
  questionLabel.style.marginLeft = '8px';
  const questionInput = document.createElement('input');
  questionInput.type = 'text';

const storedQuestions = JSON.parse(localStorage.getItem(key)); 
if (storedQuestions && storedQuestions.questions && storedQuestions.questions[index - 1]) {  // 注意下标需要减1，因为数组下标从0开始
    questionInput.value = storedQuestions.questions[index - 1].text;
}

  questionInput.style.width = '80%';  // 设置输入框宽度  
  questionInput.style.height = '30px';  // 设置输入框宽度  
  questionInput.style.margin = '10px 0';  // 设置输入框宽度  
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('option-container');  // 创建一个容器用于存放题目选项  

  // 根据题目类型填充初始选项  
  for (let i = 0; i < 4; i++) {
    if (questionType === "单选题") {
      addSingleChoiceOption1(optionsContainer, index, i);  // 添加单选选项  
    } else {
      addMultiChoiceOption1(optionsContainer, index, i);  // 添加多选选项  
    }
  }

  const addOptionButton = document.createElement('button');
  addOptionButton.innerText = '添加选项';  // 添加选项按钮  
  addOptionButton.classList.add('addOptionButton-1');
  const removeQuestionButton = document.createElement('button');
  removeQuestionButton.innerText = '删除问题';  // 删除问题按钮  
  removeQuestionButton.classList.add('remove-button-1');

  // 点击添加选项按钮的事件处理  
  addOptionButton.addEventListener('click', function () {
    if (optionsContainer.children.length < 6) {  // 限制最多添加六个选项  
      if (questionType === "单选题") {
        addSingleChoiceOption1(optionsContainer, index, optionsContainer.children.length);
      } else {
        addMultiChoiceOption1(optionsContainer, index, optionsContainer.children.length);
      }
    } else {
      alert('最多只能添加六个选项！');  // 超出选项限制时给出提示  
    }
  });

  // 点击删除问题按钮的事件处理  
  removeQuestionButton.addEventListener('click', function () {
    questionContainer.remove();  // 从页面中删除问题容器  
    questionCount--;  // 减少问题计数  
    updateQuestionNumbers();  // 更新问题编号
  });

  // 将创建的元素添加到题目容器中  
  questionContainer.appendChild(questionLabel);
  questionContainer.appendChild(questionInput);
  questionContainer.appendChild(optionsContainer);
  questionContainer.appendChild(addOptionButton);
  questionContainer.appendChild(removeQuestionButton);
  questionContainer.appendChild(createMoveButtons(questionContainer));  // 添加上下移动按钮  

  const underline = document.createElement('hr');  // 分隔线  
  questionContainer.appendChild(underline);

  return questionContainer;  // 返回构建好的题目容器  
}

// 创建填空题容器  
function createFillInBlankQuestionContainer1(type, index) {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add('question-container');  // 为填空题容器添加类名  
  questionContainer.dataset.type = '填空题';  // 设置数据属性以存储题目类型  

  const questionLabel = document.createElement('span');
  questionLabel.style.fontWeight = 'bold';
  questionLabel.style.marginLeft = '8px';
  questionLabel.innerText = `${type} ${index}: `;  // 设置题目标记，显示题目类型和编号  

  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.style.width = '80%';  // 设置输入框宽度  
  questionInput.style.height = '35px'  // 设置输入框宽度  
  questionInput.style.margin = '10px 0';  // 设置输入框宽度  
  const blankInput = document.createElement('input');
  blankInput.type = 'text';
  blankInput.style.width = '70%';
//11111111111
const storedQuestionss = JSON.parse(localStorage.getItem(key)); 
  if (storedQuestionss && storedQuestionss.questions && storedQuestionss.questions[index - 1]) {  
      const answersArray = storedQuestionss.questions[index - 1].answers;
      questionInput.value=answersArray[0].text;
      console.log(answersArray[0].text);
  }
  const removeQuestionButton = document.createElement('button');
  removeQuestionButton.innerText = '删除问题';  // 删除问题按钮  
  removeQuestionButton.classList.add('remove-button-1');

  // 点击删除问题按钮的事件处理  
  removeQuestionButton.addEventListener('click', function () {
    questionContainer.remove();  // 从页面中删除问题容器  
    questionCount--;  // 减少问题计数  
    updateQuestionNumbers();  // 更新问题编号  
  });

  // 将创建的元素添加到题目容器中  
  questionContainer.appendChild(questionLabel);
  questionContainer.appendChild(questionInput);
  // questionContainer.appendChild(blankInput);  
  questionContainer.appendChild(removeQuestionButton);
  questionContainer.appendChild(createMoveButtons(questionContainer));  // 添加上下移动按钮  

  const underline = document.createElement('hr');  // 分隔线  
  questionContainer.appendChild(underline);

  return questionContainer;  // 返回构建好的填空题容器  
}

// 创建单选题的选项  
function addSingleChoiceOption1(container, questionId, optionIndex) {
  const optionContainer = document.createElement('div');  // 创建选项容器 
  optionContainer.classList.add('singleoption');
  const optionInput = document.createElement('input');
  optionInput.type = 'radio';  // 单选使用 radio 类型  
  optionInput.name = 'question' + questionId;  // 设置同组选项的名称  

  const optionLabel = document.createElement('span');
  optionLabel.innerText = getOptionLabel(optionIndex);  // 获取选项标签（如 A, B, C...）  

  const optionText = document.createElement('input');
  optionText.type = 'text';
 
  optionText.style.marginLeft = '5px';
  optionText.style.width = '50%';
  optionText.style.height = '10%';
  const storedQuestionss = JSON.parse(localStorage.getItem(key)); 
  if (storedQuestionss && storedQuestionss.questions && storedQuestionss.questions[questionId - 1]) {  
      const answersArray = storedQuestionss.questions[questionId - 1].answers;
      optionText.value=answersArray[optionIndex].text;
  }
  const removeOptionButton = document.createElement('button');
  removeOptionButton.innerText = 'X';  // 删除选项按钮  
  removeOptionButton.style.textAlign = 'center';
  removeOptionButton.classList.add('remove-button');

  // 点击删除选项按钮的事件处理  
  removeOptionButton.addEventListener('click', function () {
    optionContainer.remove();  // 从选项容器中移除该选项  
    updateSingleChoiceOptionNumbers(container);  // 更新选项编号  
  });

  // 将创建的元素添加到选项容器  
  optionContainer.appendChild(optionInput);
  optionContainer.appendChild(optionLabel);
  optionContainer.appendChild(optionText);
  optionContainer.appendChild(removeOptionButton);

  container.appendChild(optionContainer);  // 将选项容器添加到主容器中  
}

// 创建多选题的选项  
function addMultiChoiceOption1(container, questionId, optionIndex) {
  const optionContainer = document.createElement('div');  // 创建选项容器  
  const optionInput = document.createElement('input');
  optionContainer.classList.add('manyoption');
  optionInput.type = 'checkbox';  // 多选使用 checkbox 类型  
  optionInput.name = 'question' + questionId + '-' + optionIndex;  // 为每个选项设置不同的名称  

  const optionLabel = document.createElement('span');
  optionLabel.innerText = getOptionLabel(optionIndex);  // 获取选项标签  

  const optionText = document.createElement('input');
  optionText.type = 'text';

  optionText.style.width = '50%';
  optionText.style.height = '10%';
  optionText.style.marginLeft = '5px';
  const removeOptionButton = document.createElement('button');
  removeOptionButton.innerText = 'X';  // 删除选项按钮 
  removeOptionButton.style.textAlign = 'center';
  removeOptionButton.classList.add('remove-button');

const storedQuestionss = JSON.parse(localStorage.getItem(key)); 
  if (storedQuestionss && storedQuestionss.questions && storedQuestionss.questions[questionId - 1]) {  
      const answersArray = storedQuestionss.questions[questionId - 1].answers;
      optionText.value=answersArray[optionIndex].text;
  }
  // 点击删除选项按钮的事件处理  
  removeOptionButton.addEventListener('click', function () {
    optionContainer.remove();  // 从选项容器中移除该选项  
    updateMultiChoiceOptionNumbers(container);  // 更新选项编号  
  });

  // 将创建的元素添加到选项容器  
  optionContainer.appendChild(optionInput);
  optionContainer.appendChild(optionLabel);
  optionContainer.appendChild(optionText);
  optionContainer.appendChild(removeOptionButton);

  container.appendChild(optionContainer);  // 将选项容器添加到主容器中  
}

// 获取选项标签的函数（如 A, B, C...）  
function getOptionLabel(index) {
  return String.fromCharCode(65 + index); // ASCII 编码从 A 开始  
}

// 更新单选题选项序号的函数  
function updateSingleChoiceOptionNumbers(container) {
  const options = container.querySelectorAll('div');  // 获取所有选项  
  options.forEach((option, index) => {
    const label = option.querySelector('span');  // 获取选项标签  

    if (label) {
      label.innerText = getOptionLabel(index);  // 更新选项标签  
    }
  });
}

// 更新多选题选项序号的函数  
function updateMultiChoiceOptionNumbers(container) {
  const options = container.querySelectorAll('div');  // 获取所有选项  
  options.forEach((option, index) => {
    const label = option.querySelector('span');  // 获取选项标签  
    label.style.margin = '0 5px';
    if (label) {
      label.innerText = getOptionLabel(index);  // 更新选项标签  
    }
  });
}

// 更新题目序号的函数  
function updateQuestionNumbers() {
  const questions = document.querySelectorAll('.question-container');  // 获取所有问题容器  
  questions.forEach((question, index) => {
    const label = question.querySelector('span');  // 获取题目标记  
    const type = question.dataset.type;  // 获取题目类型  
    if (label) {
      label.innerText = `${type} ${index + 1}: `;  // 更新题目标记  
    }
    // 更新选项的编号  
    const optionsContainer = question.querySelector('.option-container');
    if (optionsContainer) {
      if (type === '单选题') {
        updateSingleChoiceOptionNumbers(optionsContainer);  // 更新单选题的选项编号  
      } else if (type === '多选题') {
        updateMultiChoiceOptionNumbers(optionsContainer);  // 更新多选题的选项编号  
      }
    }
  });
}
