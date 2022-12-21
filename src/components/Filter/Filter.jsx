import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/phonebookSlice';

export const Filter = ({ filterValue }) => {
  const filter = useSelector(state => state.filterContact.filter);
  const dispatch = useDispatch();

  const onInputFilterHandle = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <input
      type="text"
      name="filter"
      className={css.input}
      onInput={onInputFilterHandle}
      value={filter}
    />
  );
};

// Filter.propTypes = {
//   onInputHandle: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
