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
  const [vald, setValidation] = useState('');

  const loadData = async () => {
    setValidation('');

    if (!start || !end) {
      setValidation("Please enter both start and end dates.");
      return;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) {
      setValidation("End date must be after start date.");
      return;
    }

    if (diffDays > 7) {
      setValidation("The date range must not exceed 7 days.");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchNEOData(start, end);
      setNeoData(data);
    } catch (error) {
      setValidation("Failed to fetch NEO data. Please try again.");
    }
    setLoading(false);
  };

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
    <div className="container bg-dark p-4 rounded mb-5">
      <h3 className="text-white">☄️ Near Earth Object Dashboard</h3>
      <div className="row g-3 my-3">
        <div className="col-md-5">
          <input
            type="date"
            className="form-control bg-white text-black border-secondary"
            value={start}
            onChange={e => setStart(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="date"
            className="form-control bg-white text-black border-secondary"
            value={end}
            onChange={e => setEnd(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-outline-light w-100"
            onClick={loadData}
          >
            Load NEO Data
          </button>
        </div>
      </div>

      {vald && <p className="text-warning">{vald}</p>}
      {loading && <p className="text-white">Loading...</p>}

      {neoData.length > 0 && (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: { tooltip: { enabled: true } },
          }}
        />
      )}

      {!loading && neoData.length === 0 && !vald && (
        <p className="text-light">No data loaded yet.</p>
      )}
    </div>
  );
};

export default NeoDashboard;
