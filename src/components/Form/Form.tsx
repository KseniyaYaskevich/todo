import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, validateAction } from '../../feature/formInput'
import { RootState } from '../../store'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

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

    const handleChange = (event: { target: { value: string } }) => {
        dispatch(validateAction(event.target.value))
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={formInput.value}
                        type="text"
                        onChange={handleChange}
                    />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}