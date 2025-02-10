import { useState } from 'react';
import { Box, Grid, Avatar, Typography, Button, Hidden } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import VerificationCenter from './VerificationCenter';
import EmailNotifications from './EmailNotifications';

function Profile() {
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    const userData = {
        username: 'john_doe',
        email: 'john.doe@example.com',
        userImage: '/userDashboard/Profile/Profile.png'
    };

    return (
        <Box sx={{ padding: { xs: '1rem', sm: '2rem' }, backgroundColor: '#f7f8fc', height: 'auto', minHeight: '90vh' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Profile
            </Typography>
            <Typography align="center" color="text.secondary" sx={{ marginBottom: '2rem' }}>
                Edit and manage your personal and account information here
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" sx={{ padding: { xs: '1rem', md: 0 } }}>
                        <Avatar
                            src={userData.userImage}
                            sx={{ width: { xs: '8rem', sm: '10rem', md: '12rem' }, height: { xs: '8rem', sm: '10rem', md: '12rem' }, marginBottom: '1rem', borderRadius: '30%' }}
                        />
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            {userData.username}
                        </Typography>
                        <Button variant="contained" sx={{ marginTop: '1rem' }}>
                            Upload Profile Picture
                        </Button>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem', textAlign: 'center' }}>
                            {userData.email}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Hidden smDown>
                        <Box sx={{ marginBottom: '2rem', background: "white", boxShadow: "3px 2px 10px #ccc", display: 'flex', border: '1px solid #ccc', borderRadius: '6px', padding: '.5rem 1rem', flexWrap: 'wrap' }}>
                            <Button onClick={() => handleTabChange(0)} sx={{ flex: 1, textTransform: 'none' }}>Personal Information</Button>
                            <Button onClick={() => handleTabChange(1)} sx={{ flex: 1, textTransform: 'none' }}>Change Password</Button>
                            <Button onClick={() => handleTabChange(2)} sx={{ flex: 1, textTransform: 'none' }}>Verification Center</Button>
                            <Button onClick={() => handleTabChange(3)} sx={{ flex: 1, textTransform: 'none' }}>Email Notifications</Button>
                        </Box>
                    </Hidden>

                    <Hidden mdUp>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <Button onClick={() => handleTabChange(0)} variant="outlined" sx={{ width: '100%', marginBottom: '1rem', textTransform: 'none' }}>Personal Information</Button>
                            <Button onClick={() => handleTabChange(1)} variant="outlined" sx={{ width: '100%', marginBottom: '1rem', textTransform: 'none' }}>Change Password</Button>
                            <Button onClick={() => handleTabChange(2)} variant="outlined" sx={{ width: '100%', marginBottom: '1rem', textTransform: 'none' }}>Verification Center</Button>
                            <Button onClick={() => handleTabChange(3)} variant="outlined" sx={{ width: '100%', textTransform: 'none' }}>Email Notifications</Button>
                        </Box>
                    </Hidden>

                    {tabIndex === 0 && <PersonalInformation />}
                    {tabIndex === 1 && <ChangePassword />}
                    {tabIndex === 2 && <VerificationCenter />}
                    {tabIndex === 3 && <EmailNotifications />}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profile;