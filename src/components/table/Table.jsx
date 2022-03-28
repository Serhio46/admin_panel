import classes from './table.module.scss';
import { tableData } from '../../data/data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableProducts  = () => {

    const rows = tableData;

    /* id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
 */
    return (
        <TableContainer className={classes.table}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell className={classes.tableCell}>Tracking ID</TableCell>
                    <TableCell className={classes.tableCell}>Product</TableCell>
                    <TableCell className={classes.tableCell}>Image</TableCell>
                    <TableCell className={classes.tableCell}>Customer</TableCell>
                    <TableCell className={classes.tableCell}>Date</TableCell>
                    <TableCell className={classes.tableCell}>Amount</TableCell>
                    <TableCell className={classes.tableCell}>Payment method</TableCell>
                    <TableCell className={classes.tableCell}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.id} >
                        <TableCell >{row.id}</TableCell>
                        <TableCell >{row.product}</TableCell>
                        <TableCell >
                            <div className={classes.imageWrapper}>
                                <img src={row.img} alt={row.name} className={classes.image}/>
                            </div>
                        </TableCell>
                        <TableCell >{row.customer}</TableCell>
                        <TableCell >{row.date}</TableCell>
                        <TableCell >{row.amount}</TableCell>
                        <TableCell >{row.method}</TableCell>
                        <TableCell >
                            <span className={`${classes.status} ${row.status === 'Pending' ? classes.Pending : classes.Approved}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
    );
}

export default TableProducts;