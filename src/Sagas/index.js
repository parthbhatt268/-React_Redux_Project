import {all, fork} from "redux-saga/effects"
import WatcherSetID from "./Watchers/SetUserData"
import WatcherGetData from "./Watchers/GetUserData"
import WatcherDeleteData from "./Watchers/DeleteUserData"
import WatcherSetNewData from "./Watchers/SetEditedUserData"
import WatcherUpdateID from "./Watchers/UpdateUserData"

export default function* root(){
    yield all([fork(WatcherSetID)])
    yield all([fork(WatcherGetData)])
    yield all([fork(WatcherDeleteData)])
    yield all([fork(WatcherSetNewData)])
    yield all([fork(WatcherUpdateID)])


}

