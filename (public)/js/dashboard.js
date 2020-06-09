// TASKS SECTION

class Task{
    constructor(taskDescription, isComplete){
        this.description = taskDescription;
        this.complete = isComplete;
    }

    render(){
        let taskElement = document.createElement('ul');
        taskElement.textContent = this.description;
        if(this.complete){
            taskElement.classList.add('font-strike');
        }
        taskElement.addEventListener('click',()=> {
            this.toggleFinished()
            taskElement.classList.toggle('font-strike');
        });
        return taskElement;
    }

    toggleFinished(){
        this.complete = !this.complete;
    }
}


class TaskList{

    constructor(tasks){
        this.tasks = tasks;
    }

    addTask(taskDescription){
        let newTask = new Task(taskDescription,false);
        this.tasks.push(newTask);
    }

    render(){
        let taskList = document.createElement('ol');
        this.tasks.forEach((task)=> {
            taskList.appendChild(task.render());
        });
        return taskList;
    }
}

class feed {
    constructor(description) {
        this.description = description;
        this.render();
    }

    render() {
        console.log(description);
        document.getElementById("demo").innerHTML = description;
    }
}

class NewTaskForm{

    constructor(submitCallback){
        this.submitCallback = submitCallback;
    }

    render(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        input.classList.add('form-control', 'mb-3', 'justify-content-center');
        input.setAttribute('placeholder', 'Whats next')

        let submitButton = document.createElement('button');
        submitButton.classList.add('btn', 'btn-primary');
        submitButton.textContent = "Add new tasks";
        form.appendChild(input);
        form.appendChild(submitButton);
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.submitCallback(input.value);
            feed(input.value);
        });
        return form;
    }
}


class App {
    constructor(parentElement, taskList) {
        this.parentElement = parentElement;
        this.taskList = taskList;
    }

    addTaskToList(taskDescription) {
        this.taskList.addTask(taskDescription);
        this.parentElement.innerHTML = '';
        this.render();
    }

    render() {
        let para = document.createElement('p');
        para.classList.add('lead');
        this.parentElement.appendChild(para);
        this.parentElement.appendChild(this.taskList.render());
        let taskForm = new NewTaskForm((description) => { this.addTaskToList(description) });
        this.parentElement.appendChild(taskForm.render());
        return this.parentElement;
    }
}



let task4 = new Task("Complete Info 340 Project", true);
let task5 = new Task("Finally graduate and pay student debt!!!", false);
let app = document.querySelector('#app');
let tasks = new TaskList([task4, task5]);
let start = new App(app, tasks);

start.render();
