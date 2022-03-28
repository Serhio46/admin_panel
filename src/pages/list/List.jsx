import React from 'react';  
import classes from './list.module.scss';
import DataTable from '../../components/dataTable/DataTabla';

const List = () => {
    return (
        <div className={classes.list}>
           <DataTable /> 
        </div>
    );
}

export default List;