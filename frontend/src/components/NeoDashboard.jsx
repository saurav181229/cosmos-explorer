import React, { useState } from 'react';
import { fetchNEOData } from '../api/neo';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const NeoDashboard = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [vald,setValidation] = useState("")
  

  const loadData = async () => {
    
    if (start && end){
      setLoading(true);
const data = await fetchNEOData(start, end);
    setNeoData(data);
    setLoading(false);
    console.log("fetchNEOData:", fetchNEOData);
    }
    else{
        setValidation("enter dates")
    }
    
  };
  console.log(neoData)

  const chartData = {
    labels: neoData.map(d => d.name),
    datasets: [
      {
        label: 'Velocity (km/h)',
        data: neoData.map(d => d.velocity_kmh),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
<div className="container bg-dark p-4 rounded mb-7">
  <h3 className="text-white">☄️ Near Earth Object Dashboard</h3>
  <div className="row g-3 my-3">
    <div className="col-md-5">
      <input type="date" className="form-control bg-white text-black border-secondary" 
      value={start}
          onChange={e => setStart(e.target.value)}
          />
    </div>
    <div className="col-md-5">
      <input type="date" className="form-control bg-white text-black border-secondary" 
      value={end}
          onChange={e => setEnd(e.target.value)}
          />
    </div>
    <div className="col-md-2">
      <button className="g-blue-500 btn btn-outline-light text-white w-100" onClick={loadData}>Load NEO Data</button>
    </div>
  </div>
  <div className="mt-4">
    {loading && <p className="text-white">Loading...</p>}

      {neoData.length > 0 && (
        <Bar data={chartData} options={{ responsive: true, plugins: { tooltip: { enabled: true } } }} />
      )}

      {neoData.length === 0 && !loading  && vald && <p lcassName="text-white">No data loaded yet.</p>}
  </div>
</div>

  );
};

export default NeoDashboard;
