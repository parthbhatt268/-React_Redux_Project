// import React, { useState } from 'react'
// import {useDispatch,connect} from 'react-redux'
// //import EditRoundedIcon from '@mui/icons-material/EditRounded';
// //import DoneAllIcon from '@mui/icons-material/DoneAll';
// //import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import {setEditStatus, newFieldData, getEmployeeData} from "../actions"
// import { Button } from '@mui/material';


// function EditableRowData(props) {
//     // console.log(props)
//     const dispatch = useDispatch()
//     const [isEditablestate, setisEditablestate] = useState(false)
//     // console.log(props.UserData)


//     const editStatusUpdate = (row) => {
//         const data = props.UserData.map(user => {
//             if(user.EmpId === row.EmpId){
//                 user.isEditable = !user.isEditable
//             }
//             return {
//                 ...user
//             }
//         })
//         return data
//     }


//     const handleEdit = (row) => {
//         setisEditablestate(true)
//        const result = editStatusUpdate(row)
//         dispatch(setEditStatus(result))
        
//     }

//     const handleSaveEdit = (row) => {
//         setisEditablestate(false)
//         // console.log(props.UserData)
//         const result = editStatusUpdate(row)
//         dispatch(setEditStatus(result))
//         dispatch(newFieldData(props.newFieldData))
//         dispatch(getEmployeeData())


//     }

//     const handleCancelEdit = (row) => {
//         setisEditablestate(false)
//         const result = editStatusUpdate(row)
//         dispatch(setEditStatus(result))
//     }


//     return (
//         <>
//             {
//                 !isEditablestate ? <Button onClick={() => handleEdit(props.currentRow)}></Button> : <>
//                     <div className='onEditButton'>
//                         <Button onClick={() => handleSaveEdit(props.currentRow)} />
//                         <Button onClick={() => handleCancelEdit(props.currentRow)} />
//                     </div>
//                 </>
//             }
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return {UserData : state.userdataState} 
// }

// //export default connect(mapStateToProps)(EditableRowData)