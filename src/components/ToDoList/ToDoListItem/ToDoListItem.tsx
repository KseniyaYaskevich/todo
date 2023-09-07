import { ToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled'

import {iconCheck, iconUncheck, iconTrash} from '../../../assets/images'

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    return (
        <ToDoItem>
            <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
            <ToDoItemControls>
                <ToDoItemControl
                    icon={iconTrash}
                    onClick={() => props.deleteToDo(props.toDoItem)}
                ></ToDoItemControl>
                <ToDoItemControl
                    icon={props.toDoItem.isDone ? iconCheck : iconUncheck}
                    onClick={() => props.updateToDo(props.toDoItem)}
                ></ToDoItemControl>
            </ToDoItemControls>
        </ToDoItem>
    )
}