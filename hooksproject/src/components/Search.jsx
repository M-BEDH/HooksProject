const Search = ({ searchStr, searchHandler }) => {

  return (

    <div style={{ textAlign: "center", margin: "1rem" }}>
      <input
        type='text'
        placeholder='Chercher ...'
        value={searchStr}
        onChange={searchHandler}
      />
    </div>
  )
}

export default Search
