function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    li.className = "bg-gray-100 p-2 rounded flex justify-between items-center cursor-pointer hover:bg-gray-200";

    // delete button
    const btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.className = "bg-red-500 text-white px-2 py-1 rounded";

    // delete logic
    btn.onclick = function (event) {
        event.stopPropagation(); // important
        li.remove();
    };

    // add button inside li
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}