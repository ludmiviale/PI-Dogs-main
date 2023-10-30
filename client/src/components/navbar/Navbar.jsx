function Navbar({ handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="search"
          placeholder="Search breeds"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Navbar;
