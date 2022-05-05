import { takeLatest, call } from "redux-saga/effects";
import { SET_EMP_DATA } from "../../constant"
import axios from 'axios'

const PostEmployeeData = async (data) => {
    let body = {
        empId : data.id , empName : data.name
    }
    const response = await axios.post("http://localhost:8000/post-employeesDetails", body)
    return response.data
}

function* WorkerSetID(action) {
    try {
        const data = action.payload
        yield call(PostEmployeeData, data)
    } catch (err) {
        alert(err)
    }

}

export default function* WatcherSetID() {
    yield takeLatest(SET_EMP_DATA, WorkerSetID)
}