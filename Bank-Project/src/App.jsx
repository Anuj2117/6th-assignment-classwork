import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';

const App = () => {
    const [values, setValues] = useState({
        homeValue: 500000,
        downPayment: 100000,
        loanAmount: 400000,
        interestRate: 5,
        loanTenure: 15,
    });

    const [chartData, setChartData] = useState({});
    const [monthlyEMI, setMonthlyEMI] = useState(0);

    const handleChange = (name, value) => {
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const calculateEMI = () => {
        const principal = values.loanAmount;
        const interestRate = values.interestRate / 12 / 100;
        const tenure = values.loanTenure * 12;
        const emi = 
            (principal * interestRate * Math.pow(1 + interestRate, tenure)) /
            (Math.pow(1 + interestRate, tenure) - 1);
        setMonthlyEMI(emi.toFixed(2));

        setChartData({
            labels: ['Principal', 'Interest'],
            datasets: [{
                label: 'Loan Breakdown',
                data: [principal, emi * tenure - principal],
                backgroundColor: ['#3e95cd', '#8e5ea2'],
            }],
        });
    };

    useEffect(() => {
        calculateEMI();
    }, [values]);

    return (
        <Container>
            <Header />
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                    <LeftCard values={values} handleChange={handleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightCard chartData={chartData} monthlyEMI={monthlyEMI} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
