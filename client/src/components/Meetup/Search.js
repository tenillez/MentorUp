import React from "react";

const Search = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Find Meetups here!"
        id="search"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default Search;