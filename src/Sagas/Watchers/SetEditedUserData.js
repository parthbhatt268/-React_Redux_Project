import { takeLatest,call } from "redux-saga/effects";
import axios from "axios";
import {SET_EMP_NEWDATA} from "../../constant"


const setEmployeeNewData = async (data) => {
    let body = {
        id: data.id,
        name: data.newName,
       
    }
    const res = await axios.put("http://localhost:8800/update-employeeDetails", body)
    // console.log(res.data)

    return res.data
}


function* WorkerSetNewData(action) {
    try{
        yield call(setEmployeeNewData, action.payload)
    }catch(err){
        console.log(err)
    }
}


export default function* WatcherSetNewData() {
    yield takeLatest(SET_EMP_NEWDATA, WorkerSetNewData)
}