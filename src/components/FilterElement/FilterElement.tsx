import { useState, type FC } from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@mui/material/FormControl';

import { setFilterType } from '../../store/posts/slicesPosts';

import {  
  StyledInput,
  StyledMenuItem, 
  StyledSelect
} from './styles';

const FilterElement: FC = () => {
  const [typeFilter, setTypeFilter] = useState('all');

  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    setTypeFilter(event.target.value);
    dispatch(setFilterType(event.target.value));
  }

  return (
    <FormControl>
      <StyledSelect
        input={ <StyledInput /> }
        value={typeFilter}
        onChange={handleChangeFilter}
      >
        <StyledMenuItem value="all" className="search-group__item-1">All</StyledMenuItem>
        <StyledMenuItem value="title">Title</StyledMenuItem>
        <StyledMenuItem value="author">Author</StyledMenuItem>
        <StyledMenuItem value="text">Text</StyledMenuItem>
        <StyledMenuItem value="tags">Tags</StyledMenuItem>
      </StyledSelect>
  </FormControl>
  )
}

export default FilterElement;
