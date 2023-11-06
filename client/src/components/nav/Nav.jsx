const Nav = ({
  handleChange,
  handleSubmit,
  searchString,
  handleFilterSource,
}) => {
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

        <label htmlFor="source">Filter by source:</label>
        <select name="source" onChange={handleFilterSource}>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="database">Database</option>
        </select>
      </form>
    </div>
  );
};

export default Nav;

/*
<Select
          name="source"
          values={["All", "Api", "DataBase"]}
          handleChange={handleFilterSource}
          keySelector={(value) => value}
        /> */
