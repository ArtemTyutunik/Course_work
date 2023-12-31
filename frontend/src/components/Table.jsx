import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import formatTime from "../utils/fromatTime.js";
import {useNavigate} from "react-router-dom";

const TableItem = (props) => {
    const {title, items, cols = []} = props
    const navigate = useNavigate()
    return (
        <>
            <Typography variant={'h3'} margin={'10px'}>
                {title}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                cols.map((col) => (
                                    <TableCell align="right" key={col.label}>{col.label}</TableCell>
                                ))
                            }
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.orderStarted}</TableCell>
                                <TableCell align="right">{formatTime(row.orderCompleteDate)}</TableCell>
                                <TableCell align="right">{row.orderCompleted}</TableCell>
                                <TableCell align="right">{row.orderProblem}</TableCell>
                                <TableCell align="right">{formatTime(row.orderStartDate)}</TableCell>
                                <TableCell align="right">
                                    <Box display={'flex'} sx={{gap: '5px'}}>
                                        <Button variant="outlined"
                                                startIcon={<InfoIcon />}
                                                onClick={() => navigate(`${row.id}`)}
                                        />
                                        <Button variant="outlined" startIcon={<BorderColorIcon />}/>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {items.length === 0 && <Typography mt={'10px'} textAlign={"center"}>No data</Typography>}
        </>


    )
}

export default TableItem;
