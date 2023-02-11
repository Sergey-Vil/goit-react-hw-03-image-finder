// import React, { Component } from 'react';
import css from './searchbar.module.css';

export const Searchbar = ({ onSubmit, search }) => {
  return (
    <div>
      <header className={css.searchbar}>
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // value={search}
          />
        </form>
      </header>
    </div>
  );
};
