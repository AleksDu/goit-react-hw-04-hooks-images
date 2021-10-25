import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchForm.module.scss";

const SearchFrom = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Наблюдает за инпутом и пишет значние в стейт
  const handleSearchInput = (e) => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  // Наблюдает за отправкой и отдает значение во внешний компонент
  const handleSubmit = (e) => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!query.trim()) return;

    // Отдать данные внешнему компоненту
    onSearch(query);

    resetForm();
  };

  // Сбрасывает поле после отправки
  const resetForm = () => setQuery("");

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s["SearchForm-button"]}>
        <span className={s["SearchForm-button-label"]}>Search</span>
      </button>

      <input
        className={s["SearchForm-input"]}
        type="text"
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;
