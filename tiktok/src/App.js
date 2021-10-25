import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "Javascript"
  },
  {
    id: 3,
    name: "ReactJS"
  },
  {
    id: 4,
    name: "NodeJS"
  }
]

function App() {
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const handlerCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        // Uncheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  const handlerSubmit = () => {
    // Call API
    console.log({ id: checked })
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handlerCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handlerSubmit}>Register</button>
    </div>
  );
}

export default App;
