// To Do List
// create variables
const listDisplay = document.getElementById("task_item")
const btnSubmit = document.getElementById("submit_button")
const key2 = "toDo"
let theList = []


// create renderTodos()  
const renderTodos = () => {

    // validate and return local storage
    const storedList = localStorage.getItem(key2)
    if (storedList) {
        theList = JSON.parse(storedList)
    }

    // grab user input and create/fill object, then save to local storage
    const txtUserInput = document.getElementById("new-todo").value
    if (txtUserInput.length > 0) {

        // create task object
        const task = {
            text: txtUserInput,
            completed: false
        }

        // fill object and save to local storage
        theList.push(task)
        localStorage.setItem(key2, JSON.stringify(theList))
    }

    // clear list for rerender
    listDisplay.innerHTML = ''

    // display list 
    theList.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.text}`
        listDisplay.appendChild(listItem)
    })
}

//      display current todo list, if any
renderTodos()


//       event listener for click
btnSubmit.addEventListener("click", renderTodos)




