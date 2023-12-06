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
import InfoIcon from "@mui/icons-material/Info.js";
import BorderColorIcon from "@mui/icons-material/BorderColor.js";
import {useNavigate} from "react-router-dom";
import formatTime from "../../utils/fromatTime.js";

const ReviewsTable = (props) => {
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.order}</TableCell>
                                <TableCell align="right">{row.customers}</TableCell>
                                <TableCell align="right">{row.text}</TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {items.length === 0 && <Typography mt={'10px'} textAlign={"center"}>No data</Typography>}
        </>


    )
}

export default ReviewsTable;
