import { useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography,
} from '@mui/material';

function PersonalInformation() {
    const [userData, setUserData] = useState({
        userFirstName: 'Aasem',
        userLastName: 'Alyhia',
        userEmail: 'Aasem@example.com',
        userPhone: '+1234567890',
        userJoinDate: '2022-01-01',
    });

    return (
        <Box sx={{ padding: { xs: '1rem', sm: '2rem' }, backgroundColor: '#f7f8fc', height: 'auto' }}>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'left' }}>
                Personal Information
            </Typography>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" fullWidth value={userData.userFirstName} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" fullWidth value={userData.userLastName} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select value="male" displayEmpty>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="User Join Date" fullWidth disabled value={userData.userJoinDate} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Email" fullWidth disabled value={userData.userEmail} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Street" disabled fullWidth value="123 Main St" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Postal Code" fullWidth disabled required value="10001" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Phone" fullWidth required value={userData.userPhone} placeholder="--- Phone" />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" sx={{ marginTop: '2rem' }}>
                <Button variant="contained">Save</Button>
            </Grid>
        </Box>
    );
}

export default PersonalInformation;