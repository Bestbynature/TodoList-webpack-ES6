import './mystyles.css';

const addButton = document.querySelector('.fa-arrow-right-to-bracket')
const todo = document.querySelector('.todo')
const abnormal = document.querySelector('.abnormal')
const domTasks = document.querySelector('.all-activities')

let tasks = []


const store = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const getter = () => {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks){
        displayTasks()
    }else{
        tasks = []
    }
}

const displayTasks = () => {
    tasks.forEach((task, i)=>{
        const taskPane = document.createElement('div')
        taskPane.className = 'task-pane'

         const topLeft = document.createElement('div')
        topLeft.className = 'top-left'

         const topRight = document.createElement('div')
        topRight.className = 'top-right'

         const leftRight = document.createElement('div')
        leftRight.className = 'left-right'


        const check = document.createElement('input')
        check.className = 'check'
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', `${task.index}`)

        const description = document.createElement('p')
        description.textContent = task.description
        description.className = 'description'
        description.setAttribute('contenteditable', 'true')

        const trash = document.createElement('i')
        trash.className = "fa-solid fa-trash-can fa-beat"

        const anchor = document.createElement('i')
        anchor.className = 'fa-solid fa-ellipsis-vertical'
        
        
        topLeft.append(check, description, trash)
        topRight.appendChild(anchor)
        leftRight.append(topLeft, topRight)
        
        const ruler = document.createElement('hr')

        taskPane.append(leftRight, ruler)

        domTasks.appendChild(taskPane)

        store()
        
        topLeft.addEventListener('mouseenter', ()=>{
            trash.style.display = 'block'
            anchor.style.display = 'none'
        })
        
        topLeft.addEventListener('mouseleave', ()=>{
            trash.style.display = 'none'
            anchor.style.display = 'block'
        })
        
        description.addEventListener('input', () => {
        const newValue = description.textContent;
        let indices = i
        const test = tasks.some(tester=>{
    if(tester.description.toLowerCase() === newValue.toLowerCase()) return true
    else return false
   })
    if(test){
            abnormal.style.display = 'block'
            abnormal.innerHTML = `Sorry! You can't add the same task twice`
        }else{
            abnormal.style.display = 'none';
        task.description = newValue
        store()
        }
        });

        trash.addEventListener('click', ()=>{
            if(tasks.length === 1){
                tasks = [];
                store()
                domTasks.innerHTML = ''
            }else {
                let indices = i
                tasks = tasks.filter(elem=> elem.index-1 !== indices)
                tasks = tasks.map((mapped, i)=>({
                    description: `${mapped.description}`,
                    index: `${i+1}`,
                    completed: false
                }))
                domTasks.innerHTML = ''
                displayTasks()
            }
            })
    })
}

const addTask = () => {
   if(todo.value){
   const test = tasks.some(tester=>{
    if(tester.description.toLowerCase() === todo.value.toLowerCase()) return true
    else return false
   })
        if(test){
            abnormal.style.display = 'block'
            abnormal.innerHTML = `Sorry! You can't add the same task twice`
        }else{
            abnormal.style.display = 'none';
            let task = { description: todo.value,
                index: tasks.length+1,
                completed: false }
            tasks.push(task)
            todo.value = '';
            domTasks.innerHTML = ''
            displayTasks()
        }
   }else{
    abnormal.style.display = 'block'
    abnormal.innerHTML = `Sorry! You can't add an empty task`
   }
}

addButton.addEventListener('click', addTask)

window.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter')  addTask()})

window.onload = getter()