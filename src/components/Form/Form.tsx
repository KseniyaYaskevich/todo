import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, validateAction } from '../../feature/formInput'
import { RootState } from '../../store'
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {
    const formInput = useSelector((state: RootState) => state.formInput)
    const dispatch = useDispatch()

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (formInput.value) {
            props.createNewToDo(formInput.value)
            dispatch(deleteAction())
        }
    }

    const handleChange = (event: { preventDefault: () => void; target: any }) => {
        dispatch(validateAction(event.target.value))
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={formInput.value} 
                        type="text"
                        onChange={handleChange}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}