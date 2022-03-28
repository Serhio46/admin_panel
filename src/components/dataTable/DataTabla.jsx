import classes from './datatable.module.scss';
import { usersData } from '../../data/data';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'username', headerName: 'User name', width: 230},
    {field: 'email', headerName: 'Email', width: 230},
    {field: 'age', headerName: 'Age', width: 100,},
    {
        field: 'img', 
        headerName: 'Image', 
        width: 100, 
        sortable: false,
        align: 'center',
        renderCell: (params) => {
            return(
                <div className={classes.wrapper}>
                    <img src={params.row.img} alt={params.row.username} className={classes.image}/>
                </div>
            )
        }
    },
    {
        field: 'status', 
        headerName: 'status', 
        align: 'center',
        width: 130,
        renderCell: (params) => {
            return (
                <div className={` ${classes.status}  
                    ${params.row.status === 'pending' && classes.Pending} 
                    ${params.row.status === 'active' && classes.Active} 
                    ${params.row.status === 'passive' && classes.Passive}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

const DataTable = () => {

    const actionColumn = [{field: 'action', headerName: 'Action', width: 200, renderCell: () => {
        return (
            <div className={classes.action}>
                <div className={classes.wiewButton}>Wiew</div>
                <div className={classes.deleteButton}>Delete</div>
            </div>
        )
    } }]

    return (
        <div className={classes.dataTable}>
            <DataGrid
                rows={usersData}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;