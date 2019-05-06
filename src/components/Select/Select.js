import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { cn } from '@bem-react/classname';
import './Select.scss';

const cnSelect = cn('Select');

const Select = ({ options, value, onChange }) => (
  <TextField
    value={value}
    select
    margin="normal"
    onChange={onChange}
    className={cnSelect('select')}
  >
    {options.map(option => (
      <MenuItem key={option.caption} value={option.id}>
        {option.caption}
      </MenuItem>
    ))}
  </TextField>
);


export default Select;