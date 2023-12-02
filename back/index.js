import express from 'express';
import cors  from "cors"
import cookieParser from 'cookie-parser'
import customerRouter from "./routes/customer.js";
import mysql from 'mysql2';
import workerRouter from "./routes/worker.js";
import deviceRouter from "./routes/device.js";
import orderRouter from "./routes/order.js";
import reviewRouter from "./routes/review.js";

const app = express();
const PORT = 3000

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'hG734nHs834n',
    database: 'service_db'
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to MySQL server');
});

app.use(cookieParser('key'))
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use('/customer', customerRouter)
app.use('/worker', workerRouter)
app.use('/device', deviceRouter)
app.use('/order', orderRouter)
app.use('/review', reviewRouter)

app.listen(PORT, () => {
    console.log('Server has started');
});

export default connection