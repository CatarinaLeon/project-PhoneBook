import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";
import { changeFilter } from "../../redux/contactSlice/contactsActions";
import s from "./SearchFilter.module.css";
import { useTranslation } from "react-i18next";

function SearchFilter() {
  const filterValue = useSelector((state) =>
    contactsSelectors.getFilter(state)
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <form className={s.filterForm}>
      <label className={s.filterLabel}>
        {t("filter.label")}:
        <input
          type="text"
          name="filter"
          value={filterValue}
          placeholder={t("filter.placeholder")}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.filterInput}
        />
      </label>
    </form>
  );
}

export default SearchFilter;
