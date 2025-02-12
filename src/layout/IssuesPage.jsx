import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  FormControl,
} from "@mui/material";
import { Add, Edit, Delete, AddCircle, RemoveCircle } from "@mui/icons-material";
import axios from "axios";
import { Form } from "react-router-dom";

const issuesData = [
  { id: 1, title: "Fix login bug", description: "Login button does not work", status: "open", date: "2025-02-01", imageUrl: "", counter: 0 },
  { id: 2, title: "Improve UI design", description: "UI needs improvement", status: "In Progress", date: "2025-01-28", imageUrl: "", counter: 2 },
  { id: 3, title: "Optimize database queries", description: "Optimize database performance", status: "Closed", date: "2025-01-30", imageUrl: "", counter: 5 },
];

const IssuesPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editIssue, setEditIssue] = useState(null);
  // State for the issue form
  const [issue, setIssue] = useState({
    title: "",
    description: "",
    issueStatus: "",
    imageUrl: "",
  });
  const [filteredIssues, setFilteredIssues] = useState(issuesData);

// Handle data on Change
const handleChange = (e) => {
  const { name, value } = e.target;
  setIssue({...issue, [name]: value});
}

// Handle data on Submit
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("test")
  try{
    const res = await axios.post("http://localhost:3000/api/issues", {data: issue});
    console.log(res);
  }catch(error){
    console.log(error);
  }
}


  const handleIncrement = (id) => {
    setFilteredIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, counter: issue.counter + 1 } : issue
      )
    );
  };

  const handleDecrement = (id) => {
    setFilteredIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id && issue.counter > 0
          ? { ...issue, counter: issue.counter - 1 }
          : issue
      )
    );
  };

  const filteredIssuesData = filteredIssues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus ? issue.status === filterStatus : true)
  );





  return (
    <Box p={3} sx={{ minHeight: "100vh" }}>
      <Box display="flex" gap={2} mb={3} mt={3} alignItems="center">
        <TextField
          label="Search issues..."
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#5B2C91" },
              "&:hover fieldset": { borderColor: "#8A69C4" },
              "&.Mui-focused fieldset": { borderColor: "#2C1A58" },
            },
            "& .MuiInputBase-input": {
              color: "#B0B0B0",
            },
            "& .MuiFormLabel-root": {
              color: "#B0B0B0",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#B0B0B0",
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TextField
          select
          label="Filter by status"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#5B2C91" },
              "&:hover fieldset": { borderColor: "#8A69C4" },
              "&.Mui-focused fieldset": { borderColor: "#2C1A58" },
            },
            "& .MuiInputBase-input": {
              color: "#B0B0B0",
            },
            "& .MuiFormLabel-root": {
              color: "#B0B0B0",
            },
          }}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="open">open</MenuItem>
          <MenuItem value="In-progress">In Progress</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </TextField>
      </Box>

      <Box mb={3} textAlign="right">
        <Button
          variant="contained"
          sx={{
            bgcolor: "#5B2C91",
            "&:hover": { bgcolor: "#8A69C4" },
            color: "white",
          }}
          onClick={() => setOpenAddModal(true)}
          startIcon={<Add />}
        >
          Add New Issue
        </Button>
      </Box>
      <Table sx={{ minWidth: 650 }}>
  <TableHead>
    <TableRow sx={{ bgcolor: "#2C1A58" }}>
      <TableCell align="center" sx={{ color: "#C0C0C0", fontWeight: "bold" }}>Issue Name</TableCell>
      <TableCell align="center" sx={{ color: "#C0C0C0", fontWeight: "bold" }}>Status</TableCell>
      <TableCell align="center" sx={{ color: "#C0C0C0", fontWeight: "bold" }}>Date Created</TableCell>
      <TableCell align="center" sx={{ color: "#C0C0C0", fontWeight: "bold" }}>Actions</TableCell>
      <TableCell align="center" sx={{ color: "#C0C0C0", fontWeight: "bold" }}>Counter</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {filteredIssuesData.map((issue) => (
      <TableRow key={issue.id}>
        <TableCell align="center" sx={{ color: "#C0C0C0" }}>{issue.title}</TableCell> 
        <TableCell align="center">
          <Typography sx={{
            fontWeight: "bold",
            color: issue.status === "Pending" ? "#8A69C4"
              : issue.status === "In Progress" ? "#8A69C4"
              : "#8A69C4",
          }}>
            {issue.status} 
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ color: "#C0C0C0" }}>{issue.date}</TableCell> 
        <TableCell align="center">
          <Box display="flex" justifyContent="center" gap={1}>
            <IconButton sx={{ color: "#8A69C4" }}>
              <Edit />
            </IconButton>
            <IconButton sx={{ color: "#C62828" }}>
              <Delete />
            </IconButton>
          </Box>
        </TableCell>
        <TableCell align="center">
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <IconButton sx={{ color: "#8A69C4" }} onClick={() => handleIncrement(issue.id)}>
              <AddCircle />
            </IconButton>
            <Typography>{issue.counter}</Typography> {/* بيانات "العداد" */}
            <IconButton sx={{ color: "#C62828" }} onClick={() => handleDecrement(issue.id)}>
              <RemoveCircle />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>


      {/* Add/Edit Issue Modal */}
      <Dialog open={openAddModal} onClose={() => setOpenAddModal(false)}>
  <DialogTitle sx={{ bgcolor: "#2C1A58", color: "#FFFFFF" }}>
    Add New Issue
  </DialogTitle>
  <DialogContent sx={{ color: "#000" }}>
   <form  onSubmit={handleSubmit}>
    <TextField label="Issue Name" variant="outlined" fullWidth margin="normal" name="title" value={issue.title} onChange={handleChange} />
    <TextField label="Description" variant="outlined" fullWidth margin="normal" name="description" value={issue.description} onChange={handleChange} />
    <TextField select label="Status" variant="outlined" fullWidth margin="normal" name="issueStatus" value={issue.issueStatus} onChange={handleChange}>
      <MenuItem value="Open">Open</MenuItem>
      <MenuItem value="-In-progress">In Progress</MenuItem>
      <MenuItem value="Closed">Closed</MenuItem>
    </TextField>
    <Button sx={{ bgcolor: "#2C1A58", color: "#FFFFFF" }} type="submit" >Add Issue</Button>
    </form>
  </DialogContent>
  
  <DialogActions>
    <Button onClick={() => setOpenAddModal(false)} sx={{ color: "#5B2C91" }}>
      Cancel
    </Button>
   
  </DialogActions>
 
</Dialog>

    </Box>
  );
};
export default IssuesPage;
