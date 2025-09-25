
function Search({searchStr}) {
  return (
    <div>
      <input 
      type='text'
      placeholder='Chercher ...'
      value={searchStr}
      onChange={searchhandler}
      />
    </div>
  )
}

export default Search
