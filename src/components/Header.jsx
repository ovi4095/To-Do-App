import Counter from "./Counter";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = ({ totalChecked, totalTasks, handleSearchTerms }) => {
  return (
    <header>
      <Logo />
      <SearchBar handleSearchTerms={handleSearchTerms} />
      <Counter totalChecked={totalChecked} totalTasks={totalTasks} />
    </header>
  );
};

export default Header;
