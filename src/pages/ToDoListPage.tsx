import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const notify = (text: string) => {
        toast(text)
    }

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false 
        }
        setTodos([...todos, newToDo])
        notify('Добавлена новая задача')
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if(item.id === toDoItem.id){
                item.isDone = !item.isDone

                if(item.isDone){
                    notify('Задача выполнена')
                } else {
                    notify('Задача НЕ выполнена')
                }
            }
            return item
        })
        setTodos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((item) => item.id !== toDoItem.id)
        setTodos(newTodos)
        notify('Задача удалена')
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <ToastContainer 
               position="bottom-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark" 
            />
        </>
    )
}