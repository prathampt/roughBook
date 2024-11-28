import { useState, useRef, useEffect } from 'react';
import '../styles/Search.css';
import { Link } from 'react-router-dom';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchTerm(searchQuery);
    if (searchQuery.length > 0) {
      const filteredData = data.filter(
        (item) =>
          item['idea'].toLowerCase().includes(searchQuery) ||
          item['title'].toLowerCase().includes(searchQuery)
      );
      setFilteredResults(filteredData);
      setDropdownVisible(true);
    } else {
      setFilteredResults([]);
      setDropdownVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleItemClick = () => {
    setSearchTerm('');
    setFilteredResults([]);
    setDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {isDropdownVisible && filteredResults.length > 0 && (
        <ul className="dropdown">
          {filteredResults.map((result, index) => (
            <li key={index} className="dropdown-item" onClick={handleItemClick}>
              <Link to={`/pages/${result['_id']}`}>
                <b>{result['title']}</b> {result['idea']}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
