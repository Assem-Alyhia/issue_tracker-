import { AppBar, Toolbar, Typography, Button, Box, Container, Card, CardContent, TextField } from '@mui/material';

const ForgetPassword = () => {
    return (
        <div>
            {/* Navbar with logo and buttons */}
            <AppBar position="sticky" sx={{ padding: " 1rem 5rem " , background:'#fff' , boxShadow: '0 0 6px #eee'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/log.png"
                            alt="Logo"
                            style={{ width: '4rem' }}
                        />
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" sx={{ marginRight: 2  , padding:'.6rem 2rem'}}>
                            Register
                        </Button>
                        <Button variant="outlined" color="primary" sx={{  padding:'.6rem 2rem'}}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Container sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Card sx={{ padding: "2rem", width: "60%", textAlign: 'center', boxShadow: '0 0 6px #eee', borderRadius: '8px' }}>
                    <CardContent>
                        <img
                            src="/aouthImages/ForgetPassword/notFound.svg"
                            alt="Password Reset"
                            style={{ width: '13rem', marginBottom: '16px' }}
                        />
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: "700" }}>
                            Forgot Password?
                        </Typography>
                        <Typography sx={{ mb: 2, width: '80% ', margin: "1rem auto", fontSize: '.9rem', fontWeight: "500" }}>
                            Enter your email address and submit the form to send a reset password link to your email address.
                        </Typography>

                        {/* Input Field for Email */}
                        <TextField
                            label="Enter your email"
                            fullWidth
                            variant="outlined"
                            sx={{ marginTop: 2, marginBottom: 2 }}
                        />

                        {/* Button to Send Email */}
                        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                            Send Email
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default ForgetPassword;
