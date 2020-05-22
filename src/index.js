document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    event.preventDefault();
    let tasks = document.getElementById("tasks");
    let description = getElementById('new-task-description').value;
    if (description == "") {
        alert("Add a ToDo!");
    }

    else {
        
        let item = document.createElement('li');
        item.innerHTML = `<div>${description}</div>`;
        tasks.appendChild(item);

        description = document.getElementById('new-task-description').value ='';
        deadline = document.getElementById('deadline').value ='';
    }
  });
  
  let tasksList=document.getElementById('tasks');
  let listItem=document.createElement('li');
  let delBtn=document.createElement('button');
  listItem.appendChild(delBtn);
  tasksList.appendChild(listItem);
});
