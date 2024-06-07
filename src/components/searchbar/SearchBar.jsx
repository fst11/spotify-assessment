import { useState} from "react";
import "./SearchBar.css"

function SearchBar({onSearch}) {
// create a state to store what the user is searching for
const [searchTerm, setsearchedTerm]=useState("");

  // function handleSearch will triggle onSearch
function handleSearch(event){
onSearch(searchTerm);
}
  // function that passes the value from the input to state searchitem
  function handleSearchChange(event){
    setsearchedTerm(event.target.value);
  }

  return (
    <div className="SearchBar"> 
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleSearchChange} />
      <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  )
}

export default SearchBar