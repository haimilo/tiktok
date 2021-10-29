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

/*
import React, { useState }  from 'react'

function App() {
  const [workItem, setWorkItem] = useState("")
  const [works, setWorks] = useState(JSON.parse(localStorage.getItem('job')) ?? [])
  const handleAdd = () => {
    setWorks(prev => {
      const newWorks = (workItem !== "") ? [...prev, workItem] : [...prev];
      const jsonWorks = JSON.stringify(newWorks);
      localStorage.setItem('job', jsonWorks);
      return newWorks;
    })
    setWorkItem("")
  }
  const handleDelete = (i) => setWorks((prev) => {
    const newWorksDelete =  prev.filter((item) => (item !== prev[i]));
    const jsonWorksDelete = JSON.stringify(newWorksDelete);
    localStorage.setItem('job', jsonWorksDelete);
    return newWorksDelete;
  })
  return (
    <div style={{padding: 30}}>
        <input
          onChange={(e)=>setWorkItem(e.target.value)}
          value = {workItem}
        />
        <button onClick = {handleAdd}>Add</button>
        <ul>
          {works.map((work, index) => {
            return (
                <li key={index}>
                  {work}
                  <button
                    style={{marginLeft: 10, borderRadius: 10}}
                    onClick = {() => handleDelete(index)}>
                    Delete
                  </button>
                </li>
            )
          })}
        </ul>
    </div>
  )
}

export default App;

*/