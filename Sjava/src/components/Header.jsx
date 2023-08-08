import SearchAndSort from './SearchAndSort';
import '../App.css'; // Import the CSS file
// import logoImage from '../images/2023-07-26.png'; // Import the logo image

const Header = ({ searchQuery, handleSearchChange, sortBy, handleSortChange }) => {
  return (
    <header className='baku'>
      <div className="logo">
       
      </div>

      <nav className='senka'>
        <SearchAndSort
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
        />
      </nav>

      

    </header>
  );
};

export default Header;

