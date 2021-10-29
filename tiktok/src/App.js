import { useState } from 'react'

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState('');
  const handlerSubmit = () => {
    setJobs(prev => [...prev, job]);
    setJob('');
  }
  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handlerSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <div style={{ display: 'flex' }}>
            <li key={index}>{job}</li>
            <input type="checkbox" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
