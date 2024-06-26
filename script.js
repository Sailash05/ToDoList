var storage = document.querySelector('.storage');
function check_func(event)
{
    if(event.target.classList.contains('checkBox_none'))
    {
        event.target.classList.remove('checkBox_none');
        event.target.classList.add('checkBox');
        event.target.parentElement.querySelector('.taskHeading').style.textDecoration = "line-through";
    }
    else
    {
        event.target.classList.remove('checkBox');
        event.target.classList.add('checkBox_none');
        event.target.style.textDecoration = "none";
        event.target.parentElement.querySelector('.taskHeading').style.textDecoration = "none";
    }
}
function remove_func(event)
{
    console.log("hello world");
    event.target.parentElement.remove();
}
function add_func()
{
    var taskValue = document.querySelector('input');
    if(taskValue.value.trim() !== "")
    {
        var newTask = document.createElement('div');
        newTask.className = "taskList";
        var newCheckBox = document.createElement('div');
        newCheckBox.className = "checkBox_none";
        newCheckBox.onclick = check_func;
        var newTaskHead = document.createElement('h1');
        newTaskHead.className = "taskHeading";
        newTaskHead.textContent = taskValue.value;
        var newBtn = document.createElement('h1');
        newBtn.className = "remove_btn";
        newBtn.textContent = "Remove";
        newBtn.onclick = remove_func;
        newTask.appendChild(newCheckBox);
        newTask.appendChild(newTaskHead);
        newTask.appendChild(newBtn);
        storage.appendChild(newTask);
    }
    taskValue.value = ""
}