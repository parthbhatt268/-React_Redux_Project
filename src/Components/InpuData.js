import React, { useState, useEffect } from "react";
import { Paper, Button, TextField } from "@mui/material";
import "../css/InputData.css";
import { useDispatch, connect } from "react-redux";
import { setEmployeeData, getEmployeeData } from "../actions";
import TableData from "./Table";
import FormDialog from "./Popup";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
function InpuData(props) {
  // console.log(props.UserData)
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState({ id: null, name: null });

  const handleSave = () => {
    if (props.UserData.some((data) => data.EmpId === Number(empData.id))) {
      alert("ID already exists");
    } else if (empData.id && empData.name) {
      dispatch(setEmployeeData(empData));
      dispatch(getEmployeeData());
      handleReset();
    } else {
      alert("Please enter all the fields");
    }
  };

  const handleReset = () => {
    setEmpData({ id: "", name: "", designation: "" });
  };
  const handleId = (e) => {
    // console.log(e.target.value)
    const id = e.target.value;
    setEmpData({ ...empData, id });
  };
  const handleName = (e) => {
    const name = e.target.value;
    setEmpData({ ...empData, name });
  };

  useEffect(() => {
    dispatch(getEmployeeData());
    // eslint-disable-next-line
  }, []);
  return (
    <>
  
      <Paper elevation={3}>
        <div className="input-fields">
          <TextField
            label="Employee Id"
            onChange={handleId}
            value={empData.id}
            type="Number"
          />
          <TextField
            label="Employee Name"
            onChange={handleName}
            value={empData.name}
            type="String"
          />
        </div>
        <div className="buttons">
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Paper>
      <TableData />
    </>
  );
}

const mapStateToProps = (state) => {
  return { UserData: state.userdataState };
};

export default connect(mapStateToProps)(InpuData);
