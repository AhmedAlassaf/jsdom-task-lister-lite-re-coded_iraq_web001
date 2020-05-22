document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    event.preventDefault();
    let tasks = document.getElementById("tasks").value;
    let addedToDos = document.getElementById("addedToDos");
    if (text == "", deadline == "") {
        alert("Add a ToDo!");
    }

    else {
        
        let newToDo = document.createElement('li');
        newToDo.innerHTML = `<div>${text}</div><div>${deadline}</div>`;
        addedToDos.appendChild(newToDo);

        text = document.getElementById('text').value ='';
        deadline = document.getElementById('deadline').value ='';
    }
  });
  
  let tasksList=document.getElementById('tasks');
  let listItem=document.createElement('li');
  let delBtn=document.createElement('button');
  listItem.appendChild(delBtn);
  tasksList.appendChild(listItem);
});
