import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const RightCard = ({ chartData, monthlyEMI }) => {
    return (
        <Box p={2} boxShadow={2}>
            <Bar data={chartData} />
            <Typography variant="h6" gutterBottom>
                Monthly EMI: {monthlyEMI}
            </Typography>
        </Box>
    );
};

export default RightCard;
