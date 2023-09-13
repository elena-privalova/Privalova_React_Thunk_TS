import { ChangeEvent, type FC } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

import { setSearchText } from '../../store/posts/slicesPosts';

import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from './styles';

const SearchElement: FC = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={handleChangeSearch}
      />
    </Search>
  );
};

export default SearchElement;

