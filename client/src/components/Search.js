import { useState } from 'react';
import '../styles/Search.css'
import { Link } from 'react-router-dom';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchTerm(searchQuery);
    if (searchQuery.length > 0) {
      const filteredData = data.filter((item) =>
        item['idea'].toLowerCase().includes(searchQuery) || 
        item['title'].toLowerCase().includes(searchQuery)
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {filteredResults.length > 0 && (
        <ul className="dropdown">
          {filteredResults.map((result, index) => (
            <li key={index} className="dropdown-item">
              <Link to={`/pages/${result['_id']}`}>
                <b>{result['title']}</b>
                {result['idea']}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
