import React, { useEffect, useState } from 'react';
import { fetchApod } from '../api/apod';
import MarsExplorer from '../components/MarsExplorer'
import NeoDashboard from '../components/NeoDashboard';
import NasaImageSearch from '../components/NasaImageSearch';
import AskTheCosmos from '../components/AskTheCosmos';

const Home = ({activeSection}) => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetchApod().then(setApod);
    console.log(apod)
  }, []);

  if (!apod) return <p>Loading...</p>;

  return (
    <div className="p-6" style={{background:'#353935'}}>
      {
        activeSection==='apod' &&(
           <div className="container bg-dark p-4 rounded mb-7" id="apod">
  <h2 className="display-5 fw-bold text-primary mb-4">📸 Astronomy Picture of the Day</h2>
  <h3 className="h4 text-info mb-3">{apod.title}</h3>

  <img src={apod.url} alt="APOD" className="img-fluid rounded shadow mb-3" style={{ maxHeight: '600px', maxWidth: '100%', objectFit: 'cover' }}/>
  <p className="lead text-light text-justify" style={{ lineHeight: '1.8', textAlign: 'justify' }}>{apod.explanation}</p>
</div>
        )
      }
     

    
     {activeSection === 'mars' && <MarsExplorer />}
      {activeSection === 'neo' && <NeoDashboard />}
      {activeSection === 'search' && <NasaImageSearch />}
      {activeSection === 'ai' && <AskTheCosmos />}

    </div>
  );
};

export default Home;
