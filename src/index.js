document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    
    let tasks = document.getElementById("tasks");
    let description = getElementById('new-task-description').value;
    let task = document.createElement('li');
    item.innerHTML = `<div>${description}</div>`;
    event.preventDefault();   
  });
});
