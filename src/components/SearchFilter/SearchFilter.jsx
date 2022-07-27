import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";
import { changeFilter } from "../../redux/contactSlice/contactsActions";
import s from "./SearchFilter.module.css";

function SearchFilter() {
  const filterValue = useSelector((state) =>
    contactsSelectors.getFilter(state)
  );
  const dispatch = useDispatch();

  return (
    <div className={s.filterContainer}>
      <label className={s.filter}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </div>
  );
}

export default SearchFilter;
