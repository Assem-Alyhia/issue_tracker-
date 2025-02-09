import { Box, Typography } from '@mui/material';

function VerificationCenter() {
    return (
        <Box textAlign="center">
            <img
                src="/userDashboard/Profile/image1.png"
                alt="Verification"
                style={{ width: '15rem', marginBottom: '1rem' }}
            />
            <Typography variant="h6">No account selected</Typography>
            <Typography variant="body2" color="text.secondary">
                Please note that no account has been selected. Before proceeding, kindly select the appropriate account or contact our support team for assistance.
            </Typography>
        </Box>
    );
}

export default VerificationCenter;