import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formInputState {
    value: string
}

const initialState: formInputState = {
    value: '',
}

export const formInputSlice = createSlice({
    name: 'formInput',
    initialState,
    reducers: {
        validateAction: (state, action: PayloadAction<string>) => {
            if (action.payload.trim() !== '') {
                state.value = action.payload
            }
        },
        deleteAction: (state) => {
            state.value = ''
        }
    },
})

export const { validateAction, deleteAction } = formInputSlice.actions

export default formInputSlice.reducer