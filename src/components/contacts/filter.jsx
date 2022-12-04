import { LabelFilterEl } from './contactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <LabelFilterEl>
      Find contacts by name
      <input
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
      />
    </LabelFilterEl>
  );
};
