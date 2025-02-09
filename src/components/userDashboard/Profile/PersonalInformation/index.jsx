import { useEffect, useState } from 'react';
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
import profile from '../../../../api/userDashboard/profile';

function PersonalInformation() {
    const [userData, setUserData] = useState({
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userPhone: '',
        userJoinDate: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await profile.getProfileData();
                const user = userResponse.data.message;
                setUserData({
                    userFirstName: user.userFirstName || '',
                    userLastName: user.userLastName || '',
                    userEmail: user.userEmail || '',
                    userPhone: user.userPhone || '',
                    userJoinDate: user.userJoinDate || '',
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ padding: { xs: '1rem', sm: '2rem' }, backgroundColor: '#f7f8fc', height: 'auto' }}>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'left' }}>
                Personal Information
            </Typography>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        fullWidth
                        value={userData.userFirstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Last Name"
                        fullWidth
                        value={userData.userLastName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select value="" displayEmpty disabled>
                            <MenuItem value="" disabled></MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="User JoinDate"
                        fullWidth
                        disabled
                        value={userData.userJoinDate}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Email"
                        fullWidth
                        disabled
                        value={userData.userEmail}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Street"
                        disabled
                        fullWidth
                        value=""
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Postal Code"
                        fullWidth
                        disabled
                        required
                        value=""
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Phone"
                        fullWidth
                        required
                        value={userData.userPhone}
                        placeholder="--- Phone"
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="flex-start" sx={{ marginTop: '2rem' }}>
                <Button variant="contained">Save</Button>
            </Grid>
        </Box>
    );
}

export default PersonalInformation;
