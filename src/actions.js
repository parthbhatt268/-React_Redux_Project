import * as constant from "./constant"

export function setEmployeeData(payload) {
    return {
        type: constant.SET_EMP_DATA,
        payload
    }
}


export function getEmployeeData() {
    return {
        type: constant.INITIAL_GET_DATA,
    }
}

export function deleteEmployeeData(payload) {
    return {
        type: constant.DELETE_EMP_DATA,
        payload
    }
}

export function setEditStatus(payload){
    return {
        type : constant.GET_EMP_DATA,
        payload
    }
}



export function newFieldData(payload){
    return {
        type : constant.SET_EMP_NEWDATA,
        payload
    }
}

export function updateEmployeeData(payload){
    return {
        type : constant.UPDATE_EMP_DATA,
        payload
    }
}