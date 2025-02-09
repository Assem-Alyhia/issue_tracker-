import { Box, Grid, TextField, Button, Typography } from '@mui/material';

function ChangePassword() {
    return (
        <Box>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'left' }}>
                Change Password
            </Typography>
            <Grid container spacing={2} sx={{ width: '60%' }}>
                <Grid item xs={12}>
                    <TextField
                        label="Current Password"
                        type="password"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="New Password" 
                        type="password" 
                        fullWidth 
                        required 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        required
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-start" sx={{ marginTop: '2rem' }}>
                <Button variant="contained">
                    Save
                </Button>
            </Grid>
        </Box>
    );
}

export default ChangePassword;
