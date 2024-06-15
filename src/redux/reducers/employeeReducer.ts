import { createSlice } from "@reduxjs/toolkit"

interface Employee {
    id: number,
    name: string,
    position: string,
}

interface InitialEmployeeState {
    employees: Employee[]
}

const initialState: InitialEmployeeState = {
    employees: []
}

const employeeSlice = createSlice({
    name: "employee",
    initialState: initialState,
    reducers: {
        setEmployees(state, action) {
            state.employees = action.payload
        },
        addEmployee(state, action) {
            state.employees.push(action.payload)
        },
        updateEmployee(state, action) {
            const index = state.employees.findIndex(employee => employee.id === action.payload.id)
            if (index !== -1) {
                state.employees[index] = action.payload
            }
        }
    }
})

export const { setEmployees, addEmployee, updateEmployee } = employeeSlice.actions

export default employeeSlice