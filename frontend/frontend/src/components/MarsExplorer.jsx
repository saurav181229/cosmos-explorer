import React, { useState } from 'react';
import { fetchMarsPhotos } from '../api/mars';

const MarsExplorer = () => {
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState('');
  const [camera, setCamera] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchPhotos = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMarsPhotos({ date, camera });
      setPhotos(data);
    } catch (err) {
      setError('Failed to load Mars photos');
    }
    setLoading(false);
  };

  return (
    <div className="container bg-dark p-4 rounded mb-7">
      <h2 className="text-white">🛰️ Mars Rover Photo Explorer</h2>
      <div className="row g-3 my-3">
    <div className="col-md-4">
      <input
          type="date"
          className="form-control bg-white text-black border-secondary"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
       <div className="col-md-4">
         <select
          className="form-select bg-white text-black border-secondary"
          value={camera}
          onChange={e => setCamera(e.target.value)}
        >
          <option value="">All Cameras</option>
          <option value="fhaz">Front Hazard</option>
          <option value="rhaz">Rear Hazard</option>
          <option value="navcam">Navigation</option>
        </select>
        
      </div>
      <div className="col-md-4">
      <button  className="btn btn-outline-light px-4 py-2 rounded" onClick={searchPhotos}>Search</button>
    </div>
      
      </div>

      {loading && <p>Loading photos...</p>}
      {error && <p className="text-red-500">{error}</p>}

  
        <div className="row">
    
    {photos.map((photo, idx) => (
      <div className="col-sm-6 col-md-4 mb-4" key={idx}>
        <div className="card bg-secondary text-white h-100">
          <img src={photo.img_src} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{photo.camera.full_name}</h5>
            
          </div>
        </div>
      </div>
      
      
    ))}
  </div>

      {photos.length === 0 && !loading &&  <div className="text-muted">No photos found.</div>}
    </div>







  );
};

export default MarsExplorer;
