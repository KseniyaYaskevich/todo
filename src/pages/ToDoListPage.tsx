import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, deleteAction, updateAction } from "../feature/todoList"
import { Toast } from "../components/Toast/Toast"

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
        toast('Добавлена новая задача')
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))

        if (!toDoItem.isDone) {
            toast('Задача выполнена')
        } else {
            toast('Задача НЕ выполнена')
        }
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
        toast('Задача удалена')
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <Toast />
        </>
    )
}