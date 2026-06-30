function addtask() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    if(task === "") return;
    const li = document.createElement("li");
    li.textContent = task;

    li.className = "bg-gray-100 p-2 rounded flex justify-between items-center cursor-pointer hover:bg-gray-200";

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "bg-red-500 text-white px-2 py-1 rounded";

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "bg-green-500 text-white px-2 py-1 rounded ml-2"

    editbtn.onclick = function (event) {
    event.stopPropagation();

    const updatedTask = prompt("Edit your task:", li.firstChild.textContent);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        li.firstChild.textContent = updatedTask;
    }
};


    btn.onclick = function (event) {
        event.stopPropagation();
        li.remove();
    };

    li.onclick = function () {
    li.classList.toggle("line-through");
    li.classList.toggle("text-gray-500");
    li.classList.toggle("bg-green-100");
};

    li.appendChild(editbtn);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}