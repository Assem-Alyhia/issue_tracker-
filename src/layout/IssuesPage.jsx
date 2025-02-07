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
} from "@mui/material";
import { Add, Edit, Delete, AddCircle, RemoveCircle } from "@mui/icons-material";

const issuesData = [
  { id: 1, title: "Fix login bug", description: "Login button does not work", status: "Pending", date: "2025-02-01", imageUrl: "", counter: 0 },
  { id: 2, title: "Improve UI design", description: "UI needs improvement", status: "In Progress", date: "2025-01-28", imageUrl: "", counter: 2 },
  { id: 3, title: "Optimize database queries", description: "Optimize database performance", status: "Closed", date: "2025-01-30", imageUrl: "", counter: 5 },
];

const IssuesPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editIssue, setEditIssue] = useState(null);
  const [newIssue, setNewIssue] = useState({
    title: "",
    description: "",
    status: "",
    imageUrl: "",
  });
  const [filteredIssues, setFilteredIssues] = useState(issuesData);

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
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
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
        <TableCell align="center" sx={{ color: "#C0C0C0" }}>{issue.title}</TableCell> {/* بيانات "اسم المشكلة" باللون الفضي */}
        <TableCell align="center">
          <Typography sx={{
            fontWeight: "bold",
            color: issue.status === "Pending" ? "#8A69C4"
              : issue.status === "In Progress" ? "#8A69C4"
              : "#8A69C4",
          }}>
            {issue.status} {/* بيانات "الحالة" */}
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ color: "#C0C0C0" }}>{issue.date}</TableCell> {/* بيانات "تاريخ الإنشاء" باللون الفضي */}
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
  <DialogContent sx={{ color: "#000" }}> {/* إزالة الخلفية السوداء */}
    <TextField label="Issue Name" variant="outlined" fullWidth margin="normal" />
    <TextField label="Description" variant="outlined" fullWidth margin="normal" />
    <TextField select label="Status" variant="outlined" fullWidth margin="normal">
      <MenuItem value="Pending">Pending</MenuItem>
      <MenuItem value="In Progress">In Progress</MenuItem>
      <MenuItem value="Closed">Closed</MenuItem>
    </TextField>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenAddModal(false)} sx={{ color: "#5B2C91" }}>
      Cancel
    </Button>
    <Button sx={{ bgcolor: "#2C1A58", color: "#FFFFFF" }}>Add Issue</Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};
export default IssuesPage;
