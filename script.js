document.querySelector('#add').onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a Task")
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class = "task">
            <label class = "taskCheck">
                <input type = "checkbox" class = "taskCheckbox">
                <span id = "taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
            </label>
            <button class = "delete">
                <i class = "far fa-trash-alt"></i>
            </button>
        </div>
        `
        let current__task = document.querySelectorAll(".delete")
        for (let i = 0; i <current__task.length; i++){
            current__task[i].onclick = function () {
                this.parentNode.remove()
            }
        }
    }
}