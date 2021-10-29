import { useState } from 'react'

function App() {
  const [jobs, setJobs] = useState([]);
  const [item, setItem] = useState('');
  const handlerSubmit = () => {
    setJobs(prev => {
      const newWorks = (item !== "") ? [...prev, item] : [...prev];
      const jsonWorks = JSON.stringify(newWorks);
      localStorage.setItem('job', jsonWorks);
      return newWorks;
    })
    setItem('');
  }
  const handleDelete = (i) => setJobs((prev) => {
    const newWorksDelete = prev.filter((item) => (item !== prev[i]));
    const jsonWorksDelete = JSON.stringify(newWorksDelete);
    localStorage.setItem('job', jsonWorksDelete);
    return newWorksDelete;
  })
  return (
    <div style={{ padding: 30 }}>
      <input
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={handlerSubmit}>Add</button>
      <ul>
        {jobs.map((work, index) => {
          return (
            <li key={index}>
              {work}
              <button
                style={{ marginLeft: 10, borderRadius: 10 }}
                onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          )
        })}
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