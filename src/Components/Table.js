import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Paper,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TextField,
} from "@mui/material";
//import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {
  deleteEmployeeData,
  getEmployeeData,
  updateEmployeeData,
} from "../actions";
import EditableRowData from "./EditableRowData";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function TableData(props) {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState([""]);
  const [saveEmpId, setSaveEmpId] = useState([""])
  const [saveEmpName, setSaveEmpName] = useState([""])

  const handleDelete = (id) => {
    console.log("table wala file", id);
    dispatch(deleteEmployeeData(id));
    dispatch(getEmployeeData());
  };
  //------------------------------------------//
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (row) => () => {
    setOpen(true);
    setDialog(row); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (props) => {
    setOpen(false);
    dispatch(updateEmployeeData({saveEmpId,saveEmpName}));
    dispatch(getEmployeeData());

  };
  //------------------------------------------//
  const handleId = (e) => {
    const id = e.target.value
    setSaveEmpId(id)
    console.log(id)
  }

  const handleName = (e) => {
    const name = e.target.value
    setSaveEmpName(name) 
    console.log(name)
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Employee Id</TableCell>
              <TableCell align="center">Employee Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.LatestUserData.length > 0 &&
              props.LatestUserData.map((row) => (
                <TableRow
                  key={row.empId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.empId}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {row.empName}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {/*<Button  variant="contained" color="primary">Update</Button>*/}
                    {/* -----------*/}
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleClickOpen(row)}
                      >
                        Update
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit Details</DialogTitle>
                        <DialogContent>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="ID"
                            fullWidth
                            variant="standard"
                            defaultValue={dialog.empId}
                            onChange={handleId}
                          />
                        </DialogContent>

                        <DialogContent>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="email"
                            fullWidth
                            variant="standard"
                            defaultValue={dialog.empName}
                            onChange={handleName}

                          />
                        </DialogContent>

                        <DialogActions>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={handleSave}>Save</Button>
                        </DialogActions>
                      </Dialog>
                    </div>

                    {/* -----------*/}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <Button
                      onClick={() => handleDelete(row.empId)}
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { LatestUserData: state.userdataState };
};

{
  /*
  return (
        <>
            <div className='table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Employee Id</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.LatestUserData.length > 0 && props.LatestUserData.map((row) => (
                                <>
                                    <TableRow
                                        key={row.EmpId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.EmpId}
                                        </TableCell>
                                       
                                                <TableCell align="center"><TextField defaultValue={row.EmpName} onChange={(e) => handleNameChange(e, row)}></TextField></TableCell>
                                                
                                            
                                                <TableCell align="center">{row.EmpName}</TableCell>

                                            
                                     
                                            <TableCell align="center"><Button onClick={() => handleDelete(row.EmpId)} /></TableCell>
                                            <TableCell align="center"><EditableRowData currentRow={row} newFieldData = {editFields}/></TableCell>
                                    
                                    </TableRow>
                                </>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

    //Pop up code 
    //--------------------//
      //---------------------------------//
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Update
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Details</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="ID"
              fullWidth
              variant="standard"
            />
          </DialogContent>

          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    //-------------------//
*/
}

export default connect(mapStateToProps)(TableData);
