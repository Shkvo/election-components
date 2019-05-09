import React, { useCallback } from 'react';
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

const Table = ({
  data,
  entity,
  bodyFields,
  handleEdit,
  handleDelete,
  headerFields,
  handleOpenDialog,
}) => {
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

  const deleteButton = useCallback(id => (
    <DeleteIcon color="primary" onClick={handleDelete(id)} />
  ));

  const headerItems = ['#', ...headerFields, addButton];
  const bodyItems = ['#', ...bodyFields, deleteButton];

  const tableHeader = headerItems.map((item, index) => {
    if (index === 0) {
      return <TableCell key={index}>{item}</TableCell>;
    }

    if (headerItems.length - 1 === index) {
      return <TableCell key={index} align="right">{item}</TableCell>;
    }

    return <TableCell key={index} align="left">{item}</TableCell>;
  });

  const tableBody = (data, index) =>
    bodyItems.map((item, itemIndex) => {
      const itemKey = `${item.id}_${itemIndex}`;
      if (itemIndex === 0) {
        return <TableCell key={itemKey}>{index}</TableCell>;
      }

      if (bodyItems.length - 1 === itemIndex) {
        return <TableCell key={itemKey} align="right">{item(data.id)}</TableCell>;
      }

      return <TableCell key={itemKey} align="left">{data[item]}</TableCell>;
    });

  return (
    <Paper className={cnTable('table')}>
      <MuiTable>
        <TableHead>
          <TableRow>{tableHeader}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow onClick={handleEdit(item)} key={item.id}>
              {tableBody(item, index)}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
};

export default Table;
