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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerRegistor = () => {
    console.log({
      name,
      email,
      password
    })
  }
  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your Name" />
      <br />

      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your Email" />
      <br />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your Password" />
      <br />

      <button onClick={handlerRegistor}>Registor</button>
    </div>
  );
}

export default App;
