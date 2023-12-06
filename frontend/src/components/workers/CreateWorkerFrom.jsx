import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import {createWorker} from "../../api/api.js";

const WorkerForm = () => {
    const [formData, setFormData] = useState({
        worker_name: '',
        worker_email: '',
        worker_phone_number: '',
        worker_salary: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const worker = {
            worker_name: formData.worker_name,
            worker_email: formData.worker_email,
            worker_phone_number: formData.worker_phone_number,
            worker_salary: formData.worker_salary
        }
        await createWorker(worker)
        console.log('Отправленная форма:', worker);
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Форма работника
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя работника"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="worker_name"
                            value={formData.worker_name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Email работника"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="worker_email"
                            value={formData.worker_email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Номер телефона работника"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="worker_phone_number"
                            value={formData.worker_phone_number}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Заработная плата работника"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="worker_salary"
                            value={formData.worker_salary}
                            onChange={handleInputChange}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                            Отправить
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default WorkerForm;
