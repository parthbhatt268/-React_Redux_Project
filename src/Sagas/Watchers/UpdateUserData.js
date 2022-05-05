import { takeLatest, call } from "redux-saga/effects";
import { UPDATE_EMP_DATA } from "../../constant"
import axios from 'axios'

const UpdateEmployeeData = async (data) => {
    console.log("Data reached saga", data)
    let body = {
        empId : data.saveEmpId , empName : data.saveEmpName
    }
    const response = await axios.put("http://localhost:8000/update-employeesDetails", body)
    console.log("saga response", response)
    return response.data
}

function* WorkerUpdateID(action) {
    try {
        const data = action.payload
        yield call(UpdateEmployeeData, data)
    } catch (err) {
        alert(err)
    }

}

export default function* WatcherUpdateID() {
    yield takeLatest(UPDATE_EMP_DATA, WorkerUpdateID)
}