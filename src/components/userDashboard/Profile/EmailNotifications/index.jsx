import { Box, Grid, Typography, FormControlLabel, Switch } from '@mui/material';
import { Email } from '@mui/icons-material';

const EmailNotifications = () => {
    return (
        <Box sx={{ width: '50%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                <Email
                    sx={{
                        fontSize: '1.5rem',
                        color: '#665bff',
                        marginRight: '8px',
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        paddingLeft: '0px',
                    }}
                >
                    Configure Email Notifications
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ backgroundColor: '#f5f8ff', padding: '1rem', borderRadius: '8px', textAlign: 'left' }}>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Informative Emails"
                        labelPlacement="end"
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            padding: '8px',
                            boxShadow: "0 0 10px #ccc",
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Switch />}
                        label="Trading Activity Emails"
                        labelPlacement="end"
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            padding: '8px',
                            boxShadow: "0 0 10px #ccc",
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default EmailNotifications;
