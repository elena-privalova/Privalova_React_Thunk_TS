import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectChangeEvent, FormControl } from '@mui/material';

import { setFilterType } from '../../store/posts/slicesPosts';
import { RootState } from '../../pages/Main/types';

import {
  StyledInput,
  StyledMenuItem,
  StyledSelect
} from './styles';

const FilterElement: FC = () => {
  const { filterType } = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();

  const handleChangeFilter = (event: SelectChangeEvent<unknown>) => {
    if (typeof event.target.value === 'string') {
      dispatch(setFilterType(event.target.value));
    }
  };

  return (
    <FormControl>
      <StyledSelect
        input={<StyledInput />}
        value={filterType}
        onChange={handleChangeFilter}
      >
        <StyledMenuItem value="all" className="search-group__item-1">All</StyledMenuItem>
        <StyledMenuItem value="title">Title</StyledMenuItem>
        <StyledMenuItem value="author">Author</StyledMenuItem>
        <StyledMenuItem value="text">Text</StyledMenuItem>
        <StyledMenuItem value="tags">Tags</StyledMenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default FilterElement;

