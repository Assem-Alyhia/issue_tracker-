import React, { useState, useEffect } from 'react';
import { 
  Box, IconButton, Menu, MenuItem, Grid, Typography, Card, 
  CardContent, CardMedia, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, FormControl, InputLabel, MenuItem as MuiMenuItem 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const IssuesCard = () => {
  const [dataIssue, setDataIssue] = useState([]);
  const [layout, setLayout] = useState('layout1');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(null); 
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/issues");
        setDataIssue(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (layoutType) => {
    setAnchorEl(null);
    if (layoutType) setLayout(layoutType);
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/issues/${id}`);
      setCurrentIssue(res.data.data); 
      setOpenDialog(true); 
    } catch (error) {
      console.error("Error fetching issue details:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/issues/${id}`);
      setDataIssue(dataIssue.filter(issue => issue.id !== id)); 
    } catch (error) {
      console.error("Error deleting issue:", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/api/issues/${currentIssue.id}`, {
        data: {
          title: currentIssue.attributes.title,
          issueStatus: currentIssue.attributes.issueStatus,
          imageUrl: currentIssue.attributes.imageUrl,
          username: currentIssue.attributes.username,
          counter: currentIssue.attributes.counter,
        }
      });
      setOpenDialog(false);
      setDataIssue(dataIssue.map(issue => issue.id === currentIssue.id ? currentIssue : issue));
    } catch (error) {
      console.error("Error saving issue:", error);
    }
  };

  const RenderCardLayout1 = ({ id, title, imageUrl, status, created, counter, username }) => {
    return (
      <Card sx={{ borderRadius: 4, boxShadow: 5, overflow: 'hidden' }}>
        <CardMedia component="img" height="180" image={imageUrl} alt={"Image of Issue"} />
        <CardContent>
          <Typography variant="h5" fontWeight="bold" color="primary">{title}</Typography>
          <Typography variant="body1" color="text.secondary">Status: {status}</Typography>
          <Typography variant="body2" color="text.secondary">Created: {new Date(created).toDateString()}</Typography>
          <Typography variant="body2" color="text.secondary">Publisher: {username}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <VisibilityIcon color="action" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{counter} Views</Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', marginLeft:35 }}>
          <IconButton onClick={() => handleEdit(id)} sx={{ color: 'primary.main' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(id)} sx={{ color: 'error.main' }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
    );
  };

  const RenderCardLayout2 = ({ id, title, imageUrl, status, created, counter, username }) => {
    return (
      <Card sx={{ borderRadius: 4, boxShadow: 3, padding: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="primary">{title}</Typography>
        <Typography variant="body2" color="text.secondary">Status: {status}</Typography>
        <Typography variant="body2" color="text.secondary">Created: {new Date(created).toDateString()}</Typography>
        <Typography variant="body2" color="text.secondary">Publisher: {username}</Typography>
        <img src={imageUrl} alt="Issue Image" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginTop: '10px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Typography variant="body2">{counter} Views</Typography>
          <Box>
            <IconButton onClick={() => handleEdit(id)} sx={{ color: 'primary.main' }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(id)} sx={{ color: 'error.main' }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* عرض البطاقات */}
      <Grid container spacing={2} sx={{ flex: 1 }}>
        {dataIssue.map((issue, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            {layout === 'layout1' ? (
              <RenderCardLayout1
                id={issue.id}
                title={issue.attributes.title}
                status={issue.attributes.issueStatus}
                imageUrl={issue.attributes.imageUrl}
                username={issue.attributes.username}
                created={issue.attributes.createdAt}
                counter={issue.attributes.counter}
              />
            ) : (
              <RenderCardLayout2
                id={issue.id}
                title={issue.attributes.title}
                status={issue.attributes.issueStatus}
                imageUrl={issue.attributes.imageUrl}
                username={issue.attributes.username}
                created={issue.attributes.createdAt}
                counter={issue.attributes.counter}
              />
            )}
          </Grid>
        ))}
      </Grid>

      {/* قائمة التنقل لاختيار تصميم البطاقات */}
      <Box sx={{ position: 'absolute', bottom: 280, right: 20 }}>
        <IconButton onClick={handleClick} sx={{ color: "#fff", bgcolor: "navy" , "&:hover": { bgcolor: "silver", color: "black" }}}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
          <MenuItem onClick={() => handleClose("layout1")}>Layout 1</MenuItem>
          <MenuItem onClick={() => handleClose("layout2")}>Layout 2</MenuItem>
        </Menu>
      </Box>

      {/* نافذة التعديل */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Issue</DialogTitle>
        <DialogContent>
          {currentIssue && (
            <>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={currentIssue.attributes.title}
                onChange={(e) => setCurrentIssue({ ...currentIssue, attributes: { ...currentIssue.attributes, title: e.target.value } })}
              />
              
             
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                  value={currentIssue.attributes.issueStatus}
                  onChange={(e) => setCurrentIssue({ ...currentIssue, attributes: { ...currentIssue.attributes, issueStatus: e.target.value } })}
                >
                  <MuiMenuItem value="Open">Open</MuiMenuItem>
                  <MuiMenuItem value="In-progress">In-progress</MuiMenuItem>
                  <MuiMenuItem value="Closed">Closed</MuiMenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Image URL"
                variant="outlined"
                fullWidth
                margin="normal"
                value={currentIssue.attributes.imageUrl}
                onChange={(e) => setCurrentIssue({ ...currentIssue, attributes: { ...currentIssue.attributes, imageUrl: e.target.value } })}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default IssuesCard;