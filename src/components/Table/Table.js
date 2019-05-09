import React from 'react';
import { cn } from '@bem-react/classname';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

import './Table.scss';

const cnTable = cn('Table');

const Table = ({ entity, headers, data, handleOpenDialog, handleEdit, handleDelete }) => {
  const addButton = (
    <Fab
      size="medium"
      color="primary"
      variant="extended"
      onClick={handleOpenDialog}
      className={cnTable('add')}
    >
      <AddIcon />
      {`Add ${entity}`}
    </Fab>
  );
  const deleteButton = (id) => (
    <DeleteIcon
      color="primary"
      onClick={handleDelete(id)}
    />
  );

  const headerItems = ['#', ...headers, addButton];
  const bodyItems = ['#', ...data, deleteButton];

  const tableHeader = headerItems.map((item, index) => {
    if (index === 0) {
      return <TableCell>{item}</TableCell>;
    }

    if (headerItems.length - 1 === index) {
      return <TableCell align="right">{item}</TableCell>
    }

    return <TableCell align="left">{item}</TableCell>
  });

  const tableBody = (id, index) => bodyItems.map(item => {
    if (index === 0) {
      return <TableCell>{index}</TableCell>;
    }

    if (headerItems.length - 1 === index) {
      return <TableCell align="right">{item(id)}</TableCell>
    }

    return <TableCell align="left">{item}</TableCell>
  });

  return (
    <Paper className={cnTable('table')}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {tableHeader}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow onClick={handleEdit(item)} key={item.id}>
              {tableBody(item.id, index)}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
};

export default Table;
