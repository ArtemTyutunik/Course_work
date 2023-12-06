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
import {deleteDevice} from "../../api/api.js";

const DevicesTable = (props) => {
    const {title, items, cols = []} = props

    const deleteItem = async (id) => {
       await deleteDevice(id)
    }

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
                            <TableCell align="right"> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.model}</TableCell>
                                <TableCell align="right">{row.customerId}</TableCell>
                                <TableCell align="right">
                                    <Button color={'error'} variant={'outlined'} onClick={() => deleteItem(row.id)}>Delete</Button>
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

export default DevicesTable;
