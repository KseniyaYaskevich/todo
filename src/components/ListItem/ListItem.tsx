import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <ListItemLink
            color={todo.isDone ? 'green' : 'red'}
            to={`/list/${todo.id}`}
        >{todo.text}</ListItemLink>
    )
}