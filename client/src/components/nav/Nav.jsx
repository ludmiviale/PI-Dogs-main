const Nav = ({ handleChange, handleSubmit, searchString }) => {
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="search"
          value={searchString}
          placeholder="Search breeds"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Nav;
