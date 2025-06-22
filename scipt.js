document.addEventListener("DOMContentLoaded",()  =>{
    const form=
    document.getElementById("taskForm");
    const categoryFilter =
    document.getElementById("filter Category");
    const priorityFilter =
    document.getElementById("filter priority");

    document.getElementById(add-button).addEventListener("click, function();
        console.log("Clicked Add Task")

    const tasklist =
    document.createElementbyId("todo-list");
    document.body.appendChild(tasklist);

    form.addEventListener("submit" , function (e)  {
        e.preventDefault() ;

    const title =
    document.getElementById("title").value;
    const desc =
    document.getElementById("description").value;

const category =
document.getElementById("category").value;
const priority =
document.getElementById("priority").value;
const dueDate =
document.getElementById("dueDate").value;

const li =
document.createElement("li");
li.textContent =`${title}  - ${desc} [${category} , ${priority} , Due:${dueDate}]`;
tasklist.appendChild(li);
form.reset();
});
});