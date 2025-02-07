import React, { useState } from 'react';
import { 
  Box, IconButton, Menu, MenuItem, Grid, Typography, Card, 
  CardContent, CardMedia 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';

const sampleIssues = [
  {
    id: 1,
    name: 'Issue 1',
    status: 'Open',
    timeCreation: '2025-02-04',
    image: '/log.png',
    publisher: 'John Doe',
    counter: 10,
  },
  {
    id: 2,
    name: 'Issue 2',
    status: 'Closed',
    timeCreation: '2025-02-03',
    image: '/log.png',
    publisher: 'Jane Smith',
    counter: 5,
  },
  {
    id: 3,
    name: 'Issue 3',
    status: 'In Progress',
    timeCreation: '2025-02-02',
    image: '/log.png',
    publisher: 'Alice Johnson',
    counter: 8,
  },
];

const IssuesCard = () => {
  const [layout, setLayout] = useState('layout1');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (layoutType) => {
    setAnchorEl(null);
    if (layoutType) setLayout(layoutType);
  };

  const renderCard = (issue) => {
    if (layout === 'layout1') {
      return (
        <Card sx={{ borderRadius: 4, boxShadow: 5, overflow: 'hidden' }}>
          <CardMedia component="img" height="180" image={issue.image} alt={issue.name} />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {issue.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Status: {issue.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created: {issue.timeCreation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publisher: {issue.publisher}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <VisibilityIcon color="action" sx={{ mr: 0.5 }} />
              <Typography variant="body2">{issue.counter} Views</Typography>
            </Box>
          </CardContent>
        </Card>
      );
    } else if (layout === 'layout2') {
      return (
        <Card sx={{ display: 'flex', borderRadius: 4, boxShadow: 5, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            sx={{ width: 150, objectFit: 'cover' }}
            image={issue.image}
            alt={issue.name}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {issue.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {issue.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created: {issue.timeCreation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publisher: {issue.publisher}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <VisibilityIcon color="action" sx={{ mr: 0.5 }} />
              <Typography variant="body2">{issue.counter} Views</Typography>
            </Box>
          </CardContent>
        </Card>
      );
    } 
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* عرض البطاقات */}
      <Grid container spacing={2} sx={{ flex: 1 }}>
        {sampleIssues.map((issue) => (
          <Grid item xs={12} sm={6} md={4} key={issue.id}>
            {renderCard(issue)}
          </Grid>
        ))}
      </Grid>

   
      <Box sx={{ position: 'absolute', bottom: 280, right: 20 }}>
        <IconButton onClick={handleClick} sx={{ color: "#fff", bgcolor: "navy" , "&:hover": { bgcolor: "silver", color: "black" }}}>
       
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
          <MenuItem onClick={() => handleClose("layout1")}>Layout 1</MenuItem>
          <MenuItem onClick={() => handleClose("layout2")}>Layout 2</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default IssuesCard;
