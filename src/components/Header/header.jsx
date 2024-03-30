import Search from '../Search/search';
import './header.css';

function Header() {
  return (
    <div className="header_container">
      <img src="./logo.svg" alt="" />

      <Search />
    </div>
  );
}

export default Header;
