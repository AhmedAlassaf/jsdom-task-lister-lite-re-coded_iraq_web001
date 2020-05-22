document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    event.preventDefault();
  });
  
  let tasksList=document.getElementById('tasks');
  let listItem=document.createElement('li');
  let delBtn=document.createElement('button');
  listItem.appendChild(delBtn);
  tasksList.appendChild(listItem);
});
