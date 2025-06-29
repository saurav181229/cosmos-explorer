import React, { useState } from 'react';
import { searchNASAImages } from '../api/search';

const NasaImageSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
   
    try {
      setLoading(true);
      const data = await searchNASAImages(query);
      setResults(data);
    } catch (err) {
      console.error("Search failed", err);
    }
    setLoading(false);
  };

  return (
<div className="container bg-dark p-4 rounded mb-7">
  <h3 className="text-white">🔍 NASA Image Search</h3>
  <div className="row g-2 my-3">
  <div className="col-md-9">
    <input
      type="text"
      className="form-control bg-white text-black border-secondary"
      placeholder="Search for a planet, galaxy..."
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  </div>
  <div className="col-md-3 d-grid">
    <button onClick={handleSearch} className="btn btn-outline-light">
      Search
    </button>
  </div>
</div>
  <div className="row">
      {loading && <p>Loading...</p>}
    {results.map((item, idx) => (
      <div className="col-sm-6 col-md-4 mb-4" key={idx}>
        <div className="card bg-secondary text-white h-100">
          <img src={item.imageUrl} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text small">{item.description}</p>
          </div>
        </div>
      </div>
      
    ))}
  </div>
  {!loading && results.length === 0 && query && (
        <p>No results found.</p>
      )}
</div>





  );
};

export default NasaImageSearch;
