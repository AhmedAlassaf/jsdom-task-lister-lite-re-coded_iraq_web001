document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    
    let tasks = document.getElementById("tasks");
    let description = getElementById('new-task-description').value;
    let task = document.createElement('li');
    task.innerHTML = description;
    tasks.appendChild(task)
    event.preventDefault();   
  });
});
