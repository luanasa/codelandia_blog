import './search.css';

function Search() {
  return (
    <div className="search-container">
      <img src="./search.svg" alt="" />
      <input type="text" placeholder="Pesquisar no blog" />
    </div>
  );
}

export default Search;
