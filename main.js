//create the variable
var addToDoBtn =document.getElementById("addToDo");
var addToDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");
var taskCounter = document.getElementById("counter"), cnt=0, cut = 0;
// create the add buton and add a function on it
addToDoBtn.addEventListener("click", function(){
    if(inputField.value ==='')
    {
        alert("To short"); //if the input is null alert
    }
    else
    {
        var list = document.createElement('p'); // create list
        list.classList.add("paragraph-styling"); //Set style for the entire list
        list.innerText = inputField.value; //assign the list text the gvalue that is written
        addToDoContainer.appendChild(list); // set the list value to be the child of div class
        inputField.value="";//empty the input field
        
        list.addEventListener("click", function(){
            if(list.style.textDecoration != "line-through"){ // check if the text is not cut
                list.style.textDecoration = "line-through"; //cut the text
                cut++; //number of text cut
                cnt = addToDoContainer.childElementCount-cut; //number of tasks
                taskCounter.innerText = "Items left " + cnt; //show the values
            }
        })
        list.addEventListener("dblclick", function(){//on double click will close the list items
            if(list.style.textDecoration == "line-through"){//check if the text is cut
                addToDoContainer.removeChild(list);// remove the list element
                cut--;
            }
        })
        cnt = addToDoContainer.childElementCount-cut; //number of tasks
        taskCounter.innerText = "Items left " + cnt;//print Items left + how many was not yet cut
    }
})