import React from 'react';
import { Box, Slider, MenuItem, Select, Typography } from '@mui/material';

const LeftCard = ({ values, handleChange }) => {
    return (
        <Box p={2} boxShadow={2}>
            <Typography gutterBottom>Home Value</Typography>
            <Slider 
                value={values.homeValue}
                onChange={(e, val) => handleChange('homeValue', val)}
                aria-labelledby="home-value-slider"
                className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx"
            />
            <Typography gutterBottom>Down Payment</Typography>
            <Slider 
                value={values.downPayment}
                onChange={(e, val) => handleChange('downPayment', val)}
                aria-labelledby="down-payment-slider"
                className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx"
            />
            <Typography gutterBottom>Loan Amount</Typography>
            <Slider 
                value={values.loanAmount}
                onChange={(e, val) => handleChange('loanAmount', val)}
                aria-labelledby="loan-amount-slider"
                className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx"
            />
            <Typography gutterBottom>Interest Rate</Typography>
            <Slider 
                value={values.interestRate}
                onChange={(e, val) => handleChange('interestRate', val)}
                aria-labelledby="interest-rate-slider"
                className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx"
            />
            <Typography gutterBottom>Loan Tenure</Typography>
            <Select
                value={values.loanTenure}
                onChange={(e) => handleChange('loanTenure', e.target.value)}
                className="MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-exkjcx"
            >
                <MenuItem value={5}>5 Years</MenuItem>
                <MenuItem value={10}>10 Years</MenuItem>
                <MenuItem value={15}>15 Years</MenuItem>
                <MenuItem value={20}>20 Years</MenuItem>
            </Select>
        </Box>
    );
};

export default LeftCard;
