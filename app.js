function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li 
    let newLi = document.createElement('li');
  
    // create new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = ''; 

    var spanDelete = document.createElement("span");
    spanDelete.setAttribute("class", "delete");
    spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";

    spanDelete.onclick = deleteItem;
    newLi.appendChild(spanDelete);

    function deleteItem(e) {
        var span = e.target;
        var id= span.parentElement.id;
        console.log("delete an item: " + id);
        var key = "toDoList" + id;
    localStorage.removeItem(key);

    // find and remove the item in the array
    for (var i = 0; i < toDoList.length; i++) {
        if (toDoList[i].id == id) {
            toDoList.splice(i, 1);
            break;
        }
    }

    // find and remove the item in the page
    var li = e.target.parentElement;
    var ul = document.getElementById("toDoList");
    ul.removeChild(li);
}             
   

    });
}

window.onload = function() {
    onReady();
 };