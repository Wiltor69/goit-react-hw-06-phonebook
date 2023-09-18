import { useDispatch, useSelector } from 'react-redux';
import { filterList } from 'redux/filterSlice';

import { Block } from './SeachBar.styled';
import { myFilters } from 'redux/selector';

export const SearchBar = () => {
  const filter = useSelector(myFilters);
  const dispatch = useDispatch();
  return (
    <Block>
      <p>Find contact by name</p>
      <label htmlFor="search">
        <input
          type="text"
          name="seach"
          value={filter}
          onChange={evt => dispatch(filterList(evt.target.value.trim()))}
        />
      </label>
    </Block>
  );
};
