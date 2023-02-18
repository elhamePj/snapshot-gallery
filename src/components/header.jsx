import SearchBox from "./searchBox";

const Header = ({ handleSearchButton }) => {
  return (
    <div className="header">
      <h1>snapShot</h1>

      <SearchBox handleSearchButton={handleSearchButton} />
    </div>
  );
};

export default Header;
